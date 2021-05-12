import { useState } from 'react'
import { Select } from 'baseui/select'

const overrides = {
  Root: {
    style: {
      display: 'inline-block',
      width: '180px',
    }
  },
  ControlContainer: {
    style: ({ $theme }) => {
      const radius = '30px'
      const color = $theme.colors.buttonSecondaryText
      return {
        color,
        backgroundColor: 'white',
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
        borderTopColor: color,
        borderBottomColor: color,
        borderLeftColor: color,
        borderRightColor: color,
      }
    }
  }
}

function DateFilter() {
  const [value, setValue] = useState([]);

  const options = [
    { id: 1, label: '2021-01-01' },
    { id: 2, label: '2021-01-08' },
    { id: 3, label: '2021-01-15' },
    { id: 4, label: '2021-01-22' },
  ]

  return (
    <Select
      options={options}
      value={value}
      placeholder="Date"
      clearable={false}
      searchable={false}
      size="compact"
      required
      onChange={params => setValue(params.value)}
      overrides={overrides}
    />
  );
}

export default DateFilter
