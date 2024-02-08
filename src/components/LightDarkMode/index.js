// Write your code here
import {Component} from 'react'

import './index.css'

class Mode extends Component {
  state = {
    isDarkMode: true,
  }
  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClass = isDarkMode ? 'dark-mode' : 'light-mode'
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-cont">
        <div className={`container ${modeClass}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Mode
