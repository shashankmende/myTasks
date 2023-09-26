import './index.css'

const Tags = props => {
  const {item, onClickTagItem} = props
  const {optionId, displayText, isActive} = item
  const activeCls = isActive ? 'active' : ''

  const onClickTag = () => {
    onClickTagItem(optionId, isActive)
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
