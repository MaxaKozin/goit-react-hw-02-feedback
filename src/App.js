import React, { Component } from 'react';

import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total) {
      return `${Math.round((good / total) * 100)}%`;
    }
    return '0%';
  };

  incrementHandler = e => {
    const key = e.target.name;
    this.setState(prev => ({ [key]: prev[key] + 1 }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onIncrement={this.incrementHandler}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            {...this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
