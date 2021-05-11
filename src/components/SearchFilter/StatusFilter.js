import SearchFilter from './SearchFilter'

function StatusFilter() {
  const options = [
    'First Pass',
    'Suggested',
    'Matched',
    'Conflict',
  ]

  return <SearchFilter label="Status" options={options} />
}

export default StatusFilter
