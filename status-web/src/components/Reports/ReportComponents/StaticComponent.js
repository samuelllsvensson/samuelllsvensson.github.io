import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import SetName from '../../Helpers/SetName';
import { SetStatusIcon } from '../../Helpers/SetStatusIcon';

const useStyles = makeStyles({
  root: {
    fontSize: '12pt',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
    display: 'flex',
    width: '10vw',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5',
  },
  titleIcon: {
    display: 'flex',
    justifySelf: 'flex-end',
    marginLeft: '5',
  },
  description: {
    fontSize: '9pt',
  },
});
const StaticComponent = (props) => {
  const {
    individualEvaluationDto,
  } = props;
  const classes = useStyles();
  return (
    individualEvaluationDto.map((values, index) => {
      const reportValueDto = values.DetailReportValuesDtos;
      return (
        <div className={classes.root} key={index.toString()}>
          <div>
            <div className={classes.title}>
              <Typography variant="subtitle1">{<SetName name={values.Name} />}</Typography>
              <div className={classes.titleIcon}>{SetStatusIcon(values.Name)}</div>
            </div>
            <div className={classes.description}>
              <Typography variant="caption">
                {reportValueDto[0].Value}
              </Typography>
            </div>
          </div>
        </div>
      );
    })
  );
};
export default StaticComponent;
