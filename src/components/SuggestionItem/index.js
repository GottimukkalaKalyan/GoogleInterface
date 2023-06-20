import './index.css'

const SuggetionItem = props => {
  const {itemDetails, directMove} = props
  const {id, suggestion} = itemDetails

  const moveToInput = () => {
    directMove(suggestion)
  }
  return (
    <li className="item">
      <p>{itemDetails.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={moveToInput}
      />
    </li>
  )
}

export default SuggetionItem
