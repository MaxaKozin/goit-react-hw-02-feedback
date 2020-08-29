import React from 'react';

import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.Section}>
    <h2 className={s.heading}>
      {title}
    </h2>
    {children}
  </section>
)

export default Section;