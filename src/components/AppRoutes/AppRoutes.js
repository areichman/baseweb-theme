import { useStyletron } from 'baseui'

const style = {
  padding: '15px',
}

function AppRoutes() {
  const [css, theme] = useStyletron()

  return (
    <main id="content" className={css(style)}>
      App routes
    </main>
  )
}

export default AppRoutes
