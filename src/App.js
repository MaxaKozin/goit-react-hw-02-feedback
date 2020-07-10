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
    this.setState(prev => {
      if (prev.total) {
        return {
          total: prev.total + 1
        }
      } else { return { total: prev.good + prev.bad + prev.neutral + 1 } }
    })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => {
      return {
        positivePercentage: `${Math.round((prev.good / prev.total) * 100)}%`
      }
    })
  }



  incrementHandler = (e) => {
    this.countTotalFeedback();
    const key = e.target.name
    const obj = {};
    this.setState((prev) => {
      obj[key] = prev[key] + 1;
      return obj
    })
    this.countPositiveFeedbackPercentage();
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <>

        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onIncrement={this.incrementHandler} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Section>
      </>
    )
  }
}


export default App;
