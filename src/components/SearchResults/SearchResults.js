import { useStyletron } from 'baseui'
import ResultsCard from '../ResultsCard/ResultsCard'

const getStyles = (theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '10px',
  }
})

function SearchResults() {
  const [css, theme] = useStyletron()
  const styles = getStyles(theme)

  return (
    <div className={css(styles.root)}>
      <ResultsCard name="Google" count="1000" />
      <ResultsCard name="Facebook" count="2000" />
      <ResultsCard name="Instagram" count="3000" />
    </div>
  )
}

export default SearchResults
