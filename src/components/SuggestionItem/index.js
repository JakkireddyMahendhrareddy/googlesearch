// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {data, updateData} = props
  const {id, suggestion} = data

  const arrowClick = () => {
    updateData(id)
  }

  return (
    <li className="inner-list">
      <h1 className="list-heading">{suggestion}</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow"
        onClick={arrowClick}
      />
    </li>
  )
}
export default SuggestionItem
