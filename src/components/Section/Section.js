import React from 'react';
import PropTypes from 'prop-types';

import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.Section}>
    {title &&
      <h2 className={s.heading}>
        {title}
      </h2>
    }
    {children}
  </section>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section;