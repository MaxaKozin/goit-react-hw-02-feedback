import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

import s from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {
      total ?
        (<div className={s.stats} >
          <div className={s.statbar} style={{
            background: `linear-gradient(to right, #0a0, #0a0 ${positivePercentage}, #a00 ${positivePercentage}, #a00 100%)`
          }} />
          <div className={s.box}>
            <p className={s.name}>Good: <br />{good}</p>
            <p className={s.name}>Neutral: <br />{neutral}</p>
            <p className={s.name}>Bad: <br />{bad}</p>
            <p className={s.name}>Total: <br />{total}</p>
            <p className={s.name}>Positive feedback: <br />{positivePercentage}</p>
          </div>
        </div >) : <Notification />
    }
  </>
)

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
}

export default Statistics;
