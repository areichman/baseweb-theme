import Dropdown from './Dropdown';

export const Basic = (args) => (
  <div style={{textAlign: 'center'}}>
    <Dropdown {...args}>
      <div style={{ padding: '5px' }}>Hello World</div>
    </Dropdown>
  </div>
)

const metadata = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Open Menu',
    },
    placement: {
      control: {
        type: 'inline-radio',
        options: ['bottomLeft', 'topLeft', 'left', 'right']
      },
      defaultValue: 'bottomLeft',
    },
    kind: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'tertiary']
      },
      defaultValue: 'primary',
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['default', 'compact', 'mini', 'large']
      },
      defaultValue: 'default',
    },
    shape: {
      control: {
        type: 'inline-radio',
        options: ['default', 'pill']
      },
      defaultValue: 'default',
    },
  },
};

export default metadata;
