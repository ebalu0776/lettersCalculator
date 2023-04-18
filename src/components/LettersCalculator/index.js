import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: 0}

  onSearchInput = () => {
    this.setState(prevState => ({
      searchInput: !prevState.searchInput.value + 1,
    }))
  }

  render() {
    const {searchInput} = this.state

    const count = searchInput ? 0 : searchInput.value + 1

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="label-text">Enter the phrase</label>
          <input type="Enter the phrase" onChange={this.onSearchInput} />
          <div>
            <p className="paragraph">No.of letters:{count}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
              className="letters-calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
