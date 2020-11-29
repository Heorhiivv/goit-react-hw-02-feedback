import React, {Component} from "react"

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Statistics from "../Statistics/Statistics"
import Section from "../Statistics/Section"
import Notification from "../Notifications/Notifications"

const options = {
  GOOD: "good",
  NEUTRAL: "neutral",
  BAD: "bad",
}

class App extends Component {
 
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleOnLeaveFeedback = (e) => {
    const feedback = e.target.textContent

    switch (feedback) {
      case "good":
        this.setState((prevState) => ({
          good: prevState.good + 1,
        }))
        break

      case "neutral":
        this.setState((prevState) => ({
          neutral: prevState.neutral + 1,
        }))
        break

      case "bad":
        this.setState((prevState) => ({
          bad: prevState.bad + 1,
        }))
        break

      default:
        console.log("no any votes")
    }
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad

  countPositiveFeedbackPercentage = () =>
    !this.state.good ? 0 : Math.ceil((this.state.good / this.countTotalFeedback()) * 100)

  render() {
    const {good, bad, neutral} = this.state
    return (
      <Section title={"Please leave feedback"}>
        <FeedbackOptions onLeaveFeedback={this.handleOnLeaveFeedback} options={options} />

        <Section title={"Statistics"}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Section>
    )
  }
}

export default App
