import { Button } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';

function Dropdown({ label, placement }) {
  const content = (
    <div style={{padding: '5px'}}>Hello world!</div>
  )

  return (
    <StatefulPopover placement={placement} content={content}>
      <Button endEnhancer={() => <ChevronDown size={24} />}>
        {label}
      </Button>
    </StatefulPopover>
  )
}

export default Dropdown
