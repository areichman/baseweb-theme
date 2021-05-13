import { useState } from 'react'
import { Card } from 'baseui/card'
import { ParagraphMedium, ParagraphSmall } from 'baseui/typography'
import { Checkbox } from 'baseui/checkbox'
import { styled } from 'baseui'

const StyledCard = styled(Card, () => ({
  ':hover': {
    cursor: 'pointer',
  }
}))

const StyledContainer = styled('div', () => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}))

const StyledLogo = styled('img', () => ({
  width: '32px',
  height: '32px',
  marginRight: '16px',
  borderRadius: '3px',
}))

const StyledTextContainer = styled('div', () => ({
  flexGrow: 1,
}))

const icons = {
  google: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
  facebook: 'https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/54cMBAu8YEP.png',
  instagram: 'https://www.instagram.com/static/images/ico/apple-touch-icon-76x76-precomposed.png/666282be8229.png',
}

function ResultsCard ({ name, count }) {
  const [checked, setChecked] = useState(false)
  const icon = icons[name.toLowerCase()]

  const handleClick = () => {
    setChecked(!checked)
  }

  return (
    <StyledCard onClick={handleClick}>
      <StyledContainer>
        <StyledLogo src={icon} />
        <StyledTextContainer>
          <ParagraphMedium margin={0}>{name}</ParagraphMedium>
          <ParagraphSmall margin={0}>{count} files</ParagraphSmall>
        </StyledTextContainer>
        <Checkbox checked={checked} />
      </StyledContainer>
    </StyledCard>
  )
}

export default ResultsCard
