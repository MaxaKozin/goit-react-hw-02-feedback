import React from 'react';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {
      good || neutral || bad ?
        (<div className={styles.stats} >
          <div className={styles.statbar} style={{
            background: `linear-gradient(to right, #0a0, #0a0 ${positivePercentage}, #a00 ${positivePercentage}, #a00 100%)`
          }} />
          <div className={styles.box}>
            <p className={styles.name}>Good: <br />{good}</p>
            <p className={styles.name}>Neutral: <br />{neutral}</p>
            <p className={styles.name}>Bad: <br />{bad}</p>
            <p className={styles.name}>Total: <br />{total}</p>
            <p className={styles.name}>Positive feedback: <br />{positivePercentage}</p>
          </div>
        </div >) : <Notification message='No feedback given' />
    }
  </>
)

export default Statistics;
