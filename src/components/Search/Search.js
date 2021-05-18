import { useStyletron } from 'baseui'
import SearchBox from '../SearchBox/SearchBox'
import SearchResults from '../SearchResults/SearchResults'

const getStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  sidebar: {
    width: '300px',
    height: 'calc(100vh - 56px)',
    padding: '15px',
    overflowY: 'auto',
    background: '#e5e5e5',
  },
  content: {
    flexGrow: 1,
    width: 'calc(100vw - 300px)',
    height: 'calc(100vh - 56px)',
    overflowY: 'auto',
  },
  filters: {
    position: 'sticky',
    top: 0,
    margin: 0,
    padding: '15px',
    background: 'white',
  },
  results: {
    padding: '15px',
  },
})

function Search() {
  const [css, theme] = useStyletron()
  const styles = getStyles(theme)

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.sidebar)}>
        Saved Searches
      </div>
      <div className={css(styles.content)}>
        <div className={css(styles.filters)}>
          <SearchBox />
        </div>
        <div className={css(styles.results)}>
          <SearchResults />
        </div>
      </div>
    </div>
  )
}

export default Search
