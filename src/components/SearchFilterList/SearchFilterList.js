import { Accordion, Panel } from 'baseui/accordion'
import { Checkbox } from 'baseui/checkbox'
import { RadioGroup, Radio } from 'baseui/radio'

const PanelOverrides = {
  Content: {
    style: {
      // backgroundColor: 'transparent',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
    }
  }
}

function SearchFilterList() {
  return (
    <Accordion accordion={false}>
      <Panel title="Date" overrides={PanelOverrides}>
        <RadioGroup>
          <Radio value="2021-01-01">2021-01-01</Radio>
          <Radio value="2021-01-08">2021-01-08</Radio>
        </RadioGroup>
      </Panel>

      <Panel title="Status" overrides={PanelOverrides}>
        <Checkbox>First Pass</Checkbox>
        <Checkbox>Suggested</Checkbox>
        <Checkbox>Matched</Checkbox>
        <Checkbox>Conflict</Checkbox>
      </Panel>

      <Panel title="ESP" overrides={PanelOverrides}>
        <Checkbox>Google</Checkbox>
        <Checkbox>Facebook</Checkbox>
        <Checkbox>Instagram</Checkbox>
      </Panel>
    </Accordion>
  )
}

export default SearchFilterList
