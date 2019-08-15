import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import { Tooltip, Typography } from '@material-ui/core';

import InfoOutlined from '@material-ui/icons/InfoOutlined';
import CameraAlt from '@material-ui/icons/CameraAlt';

import CameraPingComponent from './CameraPingComponent';
import MeasurementComponent from './MeasurementComponent';
import CameraImageComponent from './CameraImageComponent';

import SetName from '../../Helpers/SetName';
import { GroupBy } from '../../Helpers/GroupBy';
import { SortBy } from '../../Helpers/SortBy';

import { cameraOrder } from '../../../constants/sortOrders';

const useStyles = makeStyles({
  root: {
    padding: '5px 5px 0 5px',
    marginTop: '1vh',
  },
  cameraList: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  moduleTitle: {
    textAlign: 'center',
  },
  deviceReport: {
    textAlign: 'center',
    borderRadius: '5px',
    margin: '1vh',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column wrap',
    flex: '1 1 auto',
  },
  reportWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleWrapper: {
    marginBottom: '0.5vh',
  },
  title: {
    fontWeight: '600',
  },
  description: {
  },
});
const CameraListComponent = (props) => {
  const {
    individualEvaluationDto,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const cameras = GroupBy(individualEvaluationDto, e => e.DeviceName);
  return (
    <Paper className={classes.root}>
      <div className={classes.moduleTitle} style={{ position: 'relative' }}>
        <CameraAlt style={{ width: '100%', fontSize: 25 }} />
        <Typography variant="h6">{t('camStatuses')}</Typography>
        <Tooltip title={t('camStatusesTT')}>
          <InfoOutlined style={{
            position: 'absolute',
            top: '0',
            right: '0',
            fontSize: 20,
          }}
          />
        </Tooltip>
      </div>
      <div className={classes.cameraList}>
        {
          Array.from(cameras.values())
            .sort(SortBy(e => cameraOrder.indexOf(e[0].DeviceName)))
            .map((values, index) => {
              const cameraName = values[0].DeviceName;
              const pingData = values.find(e => e.Name === 'cameraPingWraper');
              const cameraImageTimeData = values.find(e => e.Name === 'cameraImageTimeWraper');
              const measurementsData = values.find(e => e.Name === 'measurementWraper');
              return (
                <div
                  className={classes.deviceReport}
                  key={index.toString()}
                >
                  <div className={classes.titleWrapper}>
                    <div className={classes.title}><Typography variant="subtitle2">{<SetName name={cameraName} />}</Typography></div>
                  </div>
                  <div className={classes.reportWrapper}>
                    <CameraPingComponent individualEvaluationDto={pingData} />
                    <CameraImageComponent individualEvaluationDto={cameraImageTimeData} />
                    <MeasurementComponent individualEvaluationDto={measurementsData} />
                  </div>
                </div>
              );
            })
          }
      </div>
    </Paper>
  );
};
export default CameraListComponent;
