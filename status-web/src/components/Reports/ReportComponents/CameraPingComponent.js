import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';

import { SetColor } from '../../Helpers/SetColor';
import { SetStatusIcon as SetPingIcon } from '../../Helpers/SetStatusIcon';

import { BASE_COLORS } from '../../../constants/colors';

const useStyles = makeStyles({
  root: {
    borderRadius: '5px',
    border: `1px solid ${BASE_COLORS.black}`,
    padding: '5px',
    paddingBottom: '0',
    height: '100%',
    alignSelf: 'center',
  },
});
const CameraPingComponent = (props) => {
  const {
    individualEvaluationDto,
  } = props;
  const classes = useStyles();
  return (
    <Paper
      className={classes.root}
      style={{ borderColor: SetColor(individualEvaluationDto.IndividualReportEvaluation.Result) }}
    >
      {SetPingIcon(individualEvaluationDto.IndividualReportEvaluation.Result)}
    </Paper>
  );
};
export default CameraPingComponent;
