import { Button } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';

function Dropdown({ label, placement = PLACEMENT.bottomLeft, children, ...buttonProps }) {
  return (
    <StatefulPopover placement={placement} content={children}>
      <Button {...buttonProps} endEnhancer={() => <ChevronDown size={24} />}>
        {label}
      </Button>
    </StatefulPopover>
  )
}

export default Dropdown
