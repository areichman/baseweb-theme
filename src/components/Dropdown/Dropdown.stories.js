import Dropdown from './Dropdown';

export const Basic = (args) => (
  <div style={{textAlign: 'center', marginTop: '30px'}}>
    <Dropdown {...args} />
  </div>
)

const metadata = {
  title: 'Dropdown',
  component: Dropdown,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
};

export default metadata;
