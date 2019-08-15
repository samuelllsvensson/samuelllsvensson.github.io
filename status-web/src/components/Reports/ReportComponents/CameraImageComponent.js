import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import { Tooltip, Typography } from '@material-ui/core';

import PermMediaOutlined from '@material-ui/icons/PermMediaOutlined';
import InfoOutlined from '@material-ui/icons/InfoOutlined';

import { SetColor } from '../../Helpers/SetColor';
import CheckIfTimestamp from '../../Helpers/CheckIfTimestamp';

import { BASE_COLORS } from '../../../constants/colors';

const useStyles = makeStyles({
  root: {
  },
  moduleTitle: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  report: {
    borderRadius: '5px',
    borderLeft: `3px solid ${BASE_COLORS.black}`,
    padding: '5px',
    margin: '5px',
  },
  title: {
    fontWeight: '600',
    width: '100%',
    fontSize: '12pt',
  },
  description: {
  },
});
const CameraImageComponent = (props) => {
  const {
    individualEvaluationDto,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const reportValueDto = individualEvaluationDto.DetailReportValuesDtos;
  const timestamp = reportValueDto.find(e => e.Name === 'Timestamp');
  return (
    <div className={classes.root}>
      <Paper
        className={classes.report}
        style={{
          borderColor: SetColor(individualEvaluationDto.IndividualReportEvaluation.Result),
          backgroundColor: `${SetColor(individualEvaluationDto.IndividualReportEvaluation.Result)}30`,
        }}
      >
        <div style={{ width: '100%' }}>
          <div className={classes.moduleTitle}>
            <PermMediaOutlined style={{ flex: '1 1 auto', fontSize: 25 }} />
            <div className={classes.title}><Typography variant="subtitle1">{t('latestImages')}</Typography></div>
            <Tooltip title={t('camImageTT')}>
              <InfoOutlined style={{ fontSize: 20 }} />
            </Tooltip>
          </div>
          {
            <div className={classes.description}>
              <div>
                <Typography variant="caption">{<CheckIfTimestamp timestamp={timestamp.Value} />}</Typography>
              </div>
            </div>
            }
        </div>
      </Paper>
    </div>
  );
};
export default CameraImageComponent;
