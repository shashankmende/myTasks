import './index.css'

const Tags = props => {
  const {item, onClickTagItem, isClicked} = props
  const {optionId, displayText} = item
  const activeCls = isClicked ? 'active' : ''

  const onClickTag = () => {
    onClickTagItem(optionId, isClicked)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${activeCls}`}
        onClick={onClickTag}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tags
