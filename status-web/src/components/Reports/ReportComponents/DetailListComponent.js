import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import { SetColor } from '../../Helpers/SetColor';
import CheckIfTimestamp from '../../Helpers/CheckIfTimestamp';
import SetName from '../../Helpers/SetName';

import { BASE_COLORS } from '../../../constants/colors';

const useStyles = makeStyles({
  root: {
    textAlign: 'left',
    borderRadius: '5px',
    borderLeft: `3px solid ${BASE_COLORS.black}`,
    padding: '5px',
    margin: '1vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: '50%',
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
  },
});
const DetailListComponent = (props) => {
  const {
    individualEvaluationDto,
  } = props;
  const classes = useStyles();
  function byteToGigaByte(n) {
    return `${Math.round(n / 10 ** 9)} GB`;
  }
  return (
    individualEvaluationDto.map((value, index) => {
      const reportValueDto = value.DetailReportValuesDtos;
      const evaluationResult = value.IndividualReportEvaluation.Result;
      let result = '';
      switch (value.Name) {
        case 'EmptyDriveSpaceInBytes':
          result = byteToGigaByte(reportValueDto.find(e => e.Name === 'Amount').Value);
          break;
        default:
          switch (reportValueDto[0].Type) {
            case 'System.DateTime':
              result = <CheckIfTimestamp timestamp={reportValueDto[0].Value} />;
              break;
            default:
              result = reportValueDto[0].Value;
              break;
          }
          break;
      }
      return (
        <Paper
          className={classes.root}
          style={{ borderColor: SetColor(evaluationResult), backgroundColor: `${SetColor(evaluationResult)}30` }}
          key={index.toString()}
        >
          <div>
            <div className={classes.title}><Typography variant="subtitle2">{<SetName name={value.Name} />}</Typography></div>
            <div className={classes.description}><Typography variant="caption">{result}</Typography></div>
          </div>
        </Paper>
      );
    })
  );
};
export default DetailListComponent;
