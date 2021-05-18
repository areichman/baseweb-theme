import { useState } from 'react'
import { Select } from 'baseui/select'
import { Button } from 'baseui/button'

const options = {
  ESP: [
    {id: 'Google', name: 'Google'},
    {id: 'Facebook', name: 'Facebook'},
    {id: 'Instagram', name: 'Instagram'},
  ],
  'File Type': [
    {id: 'image', name: 'image'},
    {id: 'video', name: 'video'},
    {id: 'other', name: 'other'},
  ],
}

function SearchBox() {
  const [value, setValue] = useState([])

  const getValueLabel = ({ option }) => {
    const prefix = option.__optgroup.toLowerCase().replace(' ', '_')
    return `${prefix}:${option.name}`
  }

  return (
    <div style={{display: 'flex'}}>
      <Select
        options={options}
        labelKey="id"
        valueKey="name"
        onChange={({value}) => setValue(value)}
        value={value}
        multi
        size="compact"
        placeholder="Search"
        getValueLabel={getValueLabel}
      />
      <Button kind="secondary" size="mini" style={{marginLeft: '10px', width: '100px'}}>
        All Filters
      </Button>
    </div>
  )
}

export default SearchBox
