import Dropdown from './Dropdown';

export const Basic = (args) => (
  <div style={{textAlign: 'center', marginTop: '30px'}}>
    <Dropdown {...args} />
  </div>
)

const metadata = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    label: {
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
      defaultValue: 'Open Menu',
    },
    placement: {
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'inline-radio',
        options: ['topLeft', 'bottomLeft', 'left', 'right']
      },
      defaultValue: 'bottomLeft',
    },
  },
};

export default metadata;
