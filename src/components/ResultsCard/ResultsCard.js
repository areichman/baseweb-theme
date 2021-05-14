import { useState } from 'react'
import { useStyletron } from 'baseui'
import { Card } from 'baseui/card'
import { ParagraphMedium, ParagraphSmall } from 'baseui/typography'
import { Checkbox } from 'baseui/checkbox'

const getStyles = (theme) => ({
  card: {
    ':hover': {
      cursor: 'pointer',
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: '32px',
    height: '32px',
    marginRight: '16px',
    borderRadius: '3px',
  },
  text: {
    flexGrow: 1,
  }
})

const icons = {
  google: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
  facebook: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/54cMBAu8YEP.png',
  instagram: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png',
}

function ResultsCard ({ name, count }) {
  const [checked, setChecked] = useState(false)
  const [css, theme] = useStyletron()

  const styles = getStyles(theme)
  const icon = icons[name.toLowerCase()]

  const handleClick = () => {
    setChecked(!checked)
  }

  return (
    <Card className={css(styles.card)} onClick={handleClick}>
      <div className={css(styles.container)}>
        <img className={css(styles.logo)} src={icon} alt={`${name} logo`} />
        <div className={css(styles.text)}>
          <ParagraphMedium margin={0}>{name}</ParagraphMedium>
          <ParagraphSmall margin={0}>{count} files</ParagraphSmall>
        </div>
        <Checkbox checked={checked} />
      </div>
    </Card>
  )
}

export default ResultsCard
