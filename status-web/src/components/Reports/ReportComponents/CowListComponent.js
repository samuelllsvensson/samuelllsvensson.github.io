import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import { Tooltip, Typography } from '@material-ui/core';

import { IconContext } from 'react-icons';
import { GiCow } from 'react-icons/gi';
import InfoOutlined from '@material-ui/icons/InfoOutlined';

import { SortBy } from '../../Helpers/SortBy';
import { SetColor } from '../../Helpers/SetColor';
import { SetStatusIcon } from '../../Helpers/SetStatusIcon';
import SetName from '../../Helpers/SetName';

import { cowListOrder } from '../../../constants/sortOrders';
import { BASE_COLORS } from '../../../constants/colors';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1vh 7vw 0',
    padding: '5px',
  },
  cows: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
  },
  moduleTitle: {
    textAlign: 'center',
  },
  cowsRoot: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    borderLeft: `3px solid ${BASE_COLORS.black}`,
    padding: '5px',
    margin: '5px',
  },
  status: {
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '600',
    margin: '5px',
  },
  description: {
    margin: '5px',
  },
});
const CowListComponent = (props) => {
  const {
    individualEvaluationDto,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Paper className={classes.root}>
      <div className={classes.moduleTitle} style={{ position: 'relative' }}>
        <IconContext.Provider value={{ size: '2em' }}>
          <GiCow style={{ width: '100%' }} />
        </IconContext.Provider>
        <Typography variant="h6">{t('cows')}</Typography>
        <Tooltip title={t('cowsTT')}>
          <InfoOutlined style={{
            position: 'absolute',
            top: '0',
            right: '0',
            fontSize: 20,
          }}
          />
        </Tooltip>
      </div>
      <div className={classes.cows}>
        {
        individualEvaluationDto.sort(SortBy(e => cowListOrder.indexOf(e.Name))).map((value, index) => {
          const reportValueDto = value.DetailReportValuesDtos;
          const evaluationResult = value.IndividualReportEvaluation.Result;
          const cowAmount = reportValueDto.find(e => e.Name === 'Amount');
          return (
            <Paper
              className={classes.cowsRoot}
              style={{
                borderColor: SetColor(evaluationResult),
                backgroundColor: `${SetColor(evaluationResult)}30`,
              }}
              key={index.toString()}
            >
              <div className={classes.status}>
                {SetStatusIcon(value.Name)}
              </div>
              <div className={classes.flex}>
                <div className={classes.title}>
                  <Typography variant="subtitle1">
                    {<SetName name={value.Name} />}
                    :
                  </Typography>
                </div>
                <div className={classes.description}>
                  <Typography variant="subtitle1">
                    {cowAmount.Value}
                  </Typography>
                </div>
              </div>
            </Paper>
          );
        })
        }
      </div>
    </Paper>
  );
};
export default CowListComponent;
