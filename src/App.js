import React, { Component } from 'react';

import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    this.setState(({ total, good, bad, neutral }) => {
      if (total) {
        return {
          total: total + 1
        }
      } else { return { total: good + bad + neutral + 1 } }
    })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => {
      return {
        positivePercentage: `${Math.round((good / total) * 100)}%`
      }
    })
  }

  incrementHandler = (e) => {
    this.countTotalFeedback();
    const key = e.target.name
    const obj = {};
    this.setState(prev => {
      obj[key] = prev[key] + 1;
      return obj
    })
    this.countPositiveFeedbackPercentage();
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onIncrement={this.incrementHandler} />
        </Section>
        <Section title="Statistics">
          <Statistics {...this.state} />
        </Section>
      </>
    )
  }
}

export default App;
