import { Accordion, Panel } from 'baseui/accordion'
import { Checkbox } from 'baseui/checkbox'
import { RadioGroup, Radio } from 'baseui/radio'

const PanelOverrides = {
  Content: {
    style: {
      backgroundColor: 'transparent',
      paddingTop: '0px',
      paddingBottom: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
    }
  }
}

const StyledPanel = (props) => (
  <Panel {...props} overrides={PanelOverrides} />
)

function SearchFilterList() {
  return (
    <Accordion accordion={false}>
      <StyledPanel title="Date">
        <RadioGroup>
          <Radio value="2021-01-01">2021-01-01</Radio>
          <Radio value="2021-01-08">2021-01-08</Radio>
        </RadioGroup>
      </StyledPanel>

      <StyledPanel title="Status">
        <Checkbox>First Pass</Checkbox>
        <Checkbox>Suggested</Checkbox>
        <Checkbox>Matched</Checkbox>
        <Checkbox>Conflict</Checkbox>
      </StyledPanel>

      <StyledPanel title="ESP">
        <Checkbox>Google</Checkbox>
        <Checkbox>Facebook</Checkbox>
        <Checkbox>Instagram</Checkbox>
      </StyledPanel>
    </Accordion>
  )
}

export default SearchFilterList
