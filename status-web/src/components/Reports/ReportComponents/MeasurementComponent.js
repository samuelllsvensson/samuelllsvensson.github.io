import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import { Tooltip, Typography } from '@material-ui/core';

import SettingsEthernet from '@material-ui/icons/SettingsEthernet';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';

import { SetColor } from '../../Helpers/SetColor';
import CheckIfTimestamp from '../../Helpers/CheckIfTimestamp';

import { results } from '../../../constants/results';
import { BASE_COLORS } from '../../../constants/colors';

const useStyles = makeStyles({
  root: {
  },
  cameraList: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  moduleTitle: {
    fontSize: '11pt',
    display: 'inline-flex',
    alignItems: 'center',
  },
  detailReport: {
    borderRadius: '5px',
    borderLeft: `3px solid ${BASE_COLORS.black}`,
    padding: '5px',
    margin: '5px',
  },
  title: {
    fontWeight: '600',
    width: '100%',
  },
  description: {
    fontSize: '9pt',
  },
});
const MeasurementComponent = (props) => {
  const {
    individualEvaluationDto,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const reportValueDto = individualEvaluationDto.DetailReportValuesDtos;
  const timestamp = reportValueDto.find(e => e.Name === 'Timestamp');
  const SuccessfulMeasurements = reportValueDto.find(e => e.Name === 'SuccessfulMeasurements');
  const TotalMeasurements = reportValueDto.find(e => e.Name === 'TotalMeasurements');
  const PercentMeasurements = reportValueDto.find(e => e.Name === 'PercentSuccessfulMeasurements');
  return (
    <div className={classes.root}>
      <Paper
        className={classes.detailReport}
        style={{
          borderColor: SetColor(individualEvaluationDto.IndividualReportEvaluation.Result),
          backgroundColor: `${SetColor(individualEvaluationDto.IndividualReportEvaluation.Result)}30`,
        }}
      >
        <div>
          <div className={classes.moduleTitle}>
            <SettingsEthernet style={{ flex: '1 1 auto', fontSize: 30 }} />
            <div className={classes.title}><Typography variant="subtitle1">{t('measurements')}</Typography></div>
            <Tooltip title={t('measurementsTT')}>
              <InfoOutlined style={{ fontSize: 20 }} />
            </Tooltip>
          </div>
          <Typography variant="caption">
            <div className={classes.description}>
              <div>
                {<CheckIfTimestamp timestamp={timestamp.Value} />}
              </div>
              <div>
                {`${SuccessfulMeasurements.Value} / ${TotalMeasurements.Value} (${PercentMeasurements.Value}%)`}
                <LinearProgress
                  color={individualEvaluationDto.IndividualReportEvaluation.Result === results.OK ? 'primary' : 'secondary'}
                  variant="determinate"
                  value={parseInt(PercentMeasurements.Value, 10)}
                />
              </div>
            </div>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};
export default MeasurementComponent;
