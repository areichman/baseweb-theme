import { useState } from 'react'
import { styled } from 'baseui'
import { Button, KIND, SIZE, SHAPE } from 'baseui/button'
import { ChevronDown, Search } from 'baseui/icon'
import { StatefulPopover, PLACEMENT } from 'baseui/popover'
import { Card } from 'baseui/card'
import { Checkbox } from 'baseui/checkbox'
import { Input, SIZE as InputSize } from 'baseui/input'

const CardOverrides = {
  Root: {
    style: {
      width: '300px'
    }
  }
}

const InputOverrides = {
  Root: {
    style: {
      marginBottom: '10px',
      paddingLeft: '0px',
      paddingRight: '5px',
    }
  }
}

const CheckboxOverrides = {
  Root: {
    style: {
      marginBottom: '5px',
    }
  }
}

const CheckboxContainer = styled('div', () => ({
  marginTop: '10px',
  marginBottom: '20px',
}))

function StatusFilter() {
  // TODO: make this list data-driven or based on a config
  const filterOptions = [
    {name: 'firstPass', label: 'First Pass'},
    {name: 'suggested', label: 'Suggested'},
    {name: 'matched', label: 'Matched'},
    {name: 'conflict', label: 'Conflict'},
  ]

  const defaultState = {}

  filterOptions.forEach((filter) => {
    defaultState[filter.name] = false;
  })

  const [inputValue, setInputValue] = useState()
  const [filters, setFilters] = useState(defaultState)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleCheckboxChange = (e) => {
    const newFilters = {...filters, [e.target.name]: e.target.checked}
    setFilters(newFilters)
  }

  const selectAll = () => {
    const newFilters = {}
    filterOptions.forEach((filter) => {
      newFilters[filter.name] = true;
    })
    setFilters(newFilters)
  }

  const clearAll = () => {
    const newFilters = {}
    filterOptions.forEach((filter) => {
      newFilters[filter.name] = false;
    })
    setFilters(newFilters)
  }

  const handleApply = () => {
    // TODO
  }

  const displayedFilters = filterOptions
    .filter(({name}) => (!inputValue || name.includes(inputValue)))

  const content = (/*{ close }*/) => (
    <Card overrides={CardOverrides}>
      <Input
        value={inputValue || ''}
        size={InputSize.compact}
        startEnhancer={<Search size="18px" />}
        overrides={InputOverrides}
        clearable
        onChange={handleInputChange}
      />

      <Button kind={KIND.tertiary} size={SIZE.mini} onClick={selectAll}>
        Select All
      </Button>

      <Button kind={KIND.tertiary} size={SIZE.mini} onClick={clearAll}>
        Clear
      </Button>

      <CheckboxContainer>
        {displayedFilters.map(({name, label}) => (
          <Checkbox
            key={name}
            name={name}
            checked={filters[name]}
            onChange={handleCheckboxChange}
            overrides={CheckboxOverrides}
          >
            {label}
          </Checkbox>
        ))}
      </CheckboxContainer>

      <Button kind={KIND.secondary} size={SIZE.compact} onClick={handleApply}>
        Apply
      </Button>
    </Card>
  )

  return (
    <StatefulPopover placement={PLACEMENT.bottomLeft} content={content}>
      <Button
        kind={KIND.secondary}
        size={SIZE.compact}
        shape={SHAPE.pill}
        endEnhancer={() => <ChevronDown size={24} />}
      >
        Status
      </Button>
    </StatefulPopover>
  )
}

export default StatusFilter
