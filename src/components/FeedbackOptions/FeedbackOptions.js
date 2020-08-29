import React from 'react';

import s from './FeedbackOptions.module.scss';


const FeedbackOptions = ({ options, onIncrement }) => (
  <div className={s.box}>
    {options.map(option => (<button className={s.btn} name={option} key={option} onClick={onIncrement}>{option.replace(option[0], option[0].toUpperCase())}</button>))}
  </div >
)

export default FeedbackOptions;