import { Button } from 'baseui/button';
import { ChevronDown } from 'baseui/icon';
import { StatefulPopover } from 'baseui/popover';

function Dropdown({ label, placement, children, ...buttonProps }) {
  return (
    <StatefulPopover placement={placement} content={children} ignoreBoundary={true}>
      <Button {...buttonProps} endEnhancer={() => <ChevronDown size={24} />}>
        {label}
      </Button>
    </StatefulPopover>
  )
}

export default Dropdown
