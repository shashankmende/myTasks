import './index.css'

const Select = props => {
  const {list} = props

  return (
    <select className="input" id="tags" onChange={this.onChangeOption}>
      {List.map(each => (
        <option key={each.optionId} value={each.optionId}>
          {each.displayText}
        </option>
      ))}
    </select>
  )
}

export default Select
