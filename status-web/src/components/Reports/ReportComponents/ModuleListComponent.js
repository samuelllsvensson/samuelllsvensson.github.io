import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import { Tooltip, Typography } from '@material-ui/core';

import InfoOutlined from '@material-ui/icons/InfoOutlined';
import ViewModule from '@material-ui/icons/ViewModule';

import { SortBy } from '../../Helpers/SortBy';
import SetName from '../../Helpers/SetName';
import { SetColor } from '../../Helpers/SetColor';
import { SetDeviceIcon } from '../../Helpers/SetDeviceIcon';
import CheckIfTimestamp from '../../Helpers/CheckIfTimestamp';

import { modulesOrder } from '../../../constants/sortOrders';
import { BASE_COLORS } from '../../../constants/colors';

const useStyles = makeStyles({
  root: {
    marginTop: '5px',
    padding: '5px',
    textAlign: 'center',
  },
  moduleWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    width: '100%',
  },
  moduleTitle: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: '12pt',
    textAlign: 'center',
    width: '100%',
  },
  moduleReport: {
    borderRadius: '5px',
    borderLeft: `3px solid ${BASE_COLORS.black}`,
    padding: '5px',
    margin: '5px',
    flex: '1 1 auto',
  },
  title: {
    fontWeight: '600',
    width: '100%',
  },
  description: {
    fontSize: '9pt',
  },
});
const ModuleListComponent = (props) => {
  const {
    individualEvaluationDto,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Paper className={classes.root}>
      <div className={classes.headerTitle} style={{ position: 'relative' }}>
        <ViewModule style={{ width: '100%', fontSize: 30 }} />
        <Typography variant="h6">{t('modules')}</Typography>
        <Tooltip title={t('modulesTT')}>
          <InfoOutlined style={{
            position: 'absolute',
            top: '0',
            right: '0',
            fontSize: 20,
          }}
          />
        </Tooltip>
      </div>
      <div className={classes.moduleWrapper}>
        {
          Array.from(individualEvaluationDto.values())
            .sort(SortBy((e => modulesOrder.indexOf(e.DeviceName))))
            .map((values, index) => {
              const moduleName = values.DeviceName;
              const reportValueDto = values.DetailReportValuesDtos;
              const evaluation = values.IndividualReportEvaluation.Result;
              const timestamp = reportValueDto.find(e => e.Name === 'Timestamp');
              return (
                <Paper
                  className={classes.moduleReport}
                  style={{
                    borderColor: SetColor(evaluation),
                    backgroundColor: `${SetColor(evaluation)}30`,
                  }}
                  key={index.toString()}
                >
                  <div>
                    <div className={classes.moduleTitle}>
                      {SetDeviceIcon(moduleName)}
                      <div className={classes.title}><Typography variant="subtitle1">{<SetName name={moduleName} />}</Typography></div>
                    </div>
                    {
                      <div className={classes.description}>
                        <div>
                          <Typography variant="caption">
                            {<CheckIfTimestamp timestamp={timestamp.Value} />}
                          </Typography>
                        </div>
                      </div>
                    }
                  </div>
                </Paper>
              );
            })
          }
      </div>
    </Paper>
  );
};
export default ModuleListComponent;
