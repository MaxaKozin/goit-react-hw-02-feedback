import React from 'react';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.scss';


const FeedbackOptions = ({ options, onIncrement }) => (
  <div className={s.box}>
    {options.map(option => (<button className={s.btn} name={option} key={option} onClick={onIncrement}>{option.replace(option[0], option[0].toUpperCase())}</button>))}
  </div >
)

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onIncrement: PropTypes.func.isRequired
}

export default FeedbackOptions;