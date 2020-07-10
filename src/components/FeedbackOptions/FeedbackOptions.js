import React from 'react';
import styles from './FeedbackOptions.module.css';


const FeedbackOptions = ({ options, onIncrement }) => (
  <div className={styles.box}>
    {options.map(option => (<button className={styles.btn} name={option} key={option} onClick={onIncrement}>{option.replace(option[0], option[0].toUpperCase())}</button>))}
  </div >
)

export default FeedbackOptions;