import { useStyletron } from 'baseui'

const getStyles = (theme) => ({
  padding: '15px',
})

function AppRoutes() {
  const [css, theme] = useStyletron()
  const styles = getStyles(theme)

  return (
    <main id="content" className={css(styles)}>
      App routes
    </main>
  )
}

export default AppRoutes
