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
      width: '300px',
      maxHeight: '450px',
      overflowY: 'auto',
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

/*
type FilterOption = {
  name: string,
  label: string
}

interface Props {
  label: string
  options: string[]
  radio: boolean
}
*/

function SearchFilter({ label, options = [], /* radio = false */ }) {
  const defaultState = {}

  options.forEach((opt) => {
    defaultState[opt] = false;
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

  const handleSelectAll = () => {
    const newFilters = {}
    options.forEach((opt) => {
      newFilters[opt] = true;
    })
    setFilters(newFilters)
  }

  const handleClearAll = () => {
    const newFilters = {}
    options.forEach((opt) => {
      newFilters[opt] = false;
    })
    setFilters(newFilters)
  }

  const handleApply = () => {
    // TODO
  }

  const displayedFilters = options
    .filter((opt) => (!inputValue || opt.toLowerCase().includes(inputValue.toLowerCase())))

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

      <Button kind={KIND.tertiary} size={SIZE.mini} onClick={handleSelectAll}>
        Select All
      </Button>

      <Button kind={KIND.tertiary} size={SIZE.mini} onClick={handleClearAll}>
        Clear
      </Button>

      <CheckboxContainer>
        {displayedFilters.map((filter) => (
          <Checkbox
            key={filter}
            name={filter}
            checked={filters[filter]}
            onChange={handleCheckboxChange}
            overrides={CheckboxOverrides}
          >
            {filter}
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
        {label}
      </Button>
    </StatefulPopover>
  )
}

export default SearchFilter