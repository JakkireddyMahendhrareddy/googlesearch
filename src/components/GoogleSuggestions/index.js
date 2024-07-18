// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {inputValue: ''}

  enterInput = event => {
    this.setState({inputValue: event.target.value})
  }

  updateData = id => {
    const {suggestionsList} = this.props

    this.setState({inputValue: suggestionsList[id - 1].suggestion})
  }

  render() {
    const {inputValue} = this.state
    const {suggestionsList} = this.props

    const finalResults = suggestionsList.filter(each =>
      each.suggestion.includes(inputValue),
    )

    return (
      <div className="container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <button className="card" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="google logo"
              className="search-icon"
            />
            <input
              onChange={this.enterInput}
              type="text"
              placeholder="Search google"
              className="searching"
              value={inputValue}
            />
          </button>
          <ul className="list-container">
            {finalResults.map(eachList => (
              <SuggestionItem
                key={eachList.id}
                data={eachList}
                updateData={this.updateData}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
