import { useStyletron } from 'baseui'

const getStyles = (theme) => ({
  background: '#333',
  color: 'white',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
}}

function AppHeader() {
  const [css, theme] = useStyletron();
  const styles = getStyles(theme)

  return (
    <header id="header" className={css(styles)}>
      App header
    </header>
  )
}

export default AppHeader
