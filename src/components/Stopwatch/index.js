import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSec: 0, isTimerRunning: false}

  timeFormatToDisplay = () => {
    const {timeInSec} = this.state
    const minutes = Math.floor(timeInSec / 60)
    const seconds = Math.floor(timeInSec % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  startTimer = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({
          timeInSec: prevState.timeInSec + 1,
          isTimerRunning: true,
        }))
      }, 1000)
    }
  }

  stopTimer = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.intervalId)
      this.setState({isTimerRunning: false})
    }
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({timeInSec: 0, isTimerRunning: false})
  }

  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="stopwatch-title">Stopwatch</h1>
          <div className="main-timer-container">
            <div className="timer-icon-and-para">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-icon"
              />
              <p className="timer-para">Timer</p>
            </div>
            <h1 className="timer-countdown">{this.timeFormatToDisplay()}</h1>
            <div className="btn-container">
              <button
                onClick={this.startTimer}
                type="button"
                className="start-btn"
              >
                Start
              </button>
              <button
                onClick={this.stopTimer}
                type="button"
                className="stop-btn"
              >
                Stop
              </button>
              <button
                onClick={this.resetTimer}
                type="button"
                className="reset-btn"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
