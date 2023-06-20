import {Component} from 'react'
import './index.css'
import SuggetionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  ChangeContent = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  directMove = value => {
    console.log(value)
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const newSuggestList = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleLogo"
          />
        </div>
        <div className="inputContainerMain">
          <div className="inputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              className="inputField"
              placeholder="Google Search"
              onChange={this.ChangeContent}
              value={searchInput}
            />
          </div>
          <ul className="unorderListCard">
            {newSuggestList.map(eachItem => (
              <SuggetionItem
                itemDetails={eachItem}
                key={eachItem.id}
                directMove={this.directMove}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
