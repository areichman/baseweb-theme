import { useStyletron } from 'baseui'

const style = {
  background: '#333',
  color: 'white',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
}

function AppHeader() {
  const [css, theme] = useStyletron();

  return (
    <header id="header" className={css(style)}>
      App header
    </header>
  )
}

export default AppHeader
