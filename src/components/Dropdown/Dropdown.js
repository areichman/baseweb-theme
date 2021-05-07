import { Button } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';

function Dropdown() {
  const content = (/*{ close }*/) => (
    <div style={{padding: '5px'}}>Hello world!</div>
  )

  return (
    <div style={{textAlign: 'center', marginTop: '30px'}}>
      <StatefulPopover placement={PLACEMENT.bottomLeft} content={content}>
        <Button endEnhancer={() => <ChevronDown size={24} />}>
          Open Menu
        </Button>
      </StatefulPopover>
    </div>
  )
}

export default Dropdown
