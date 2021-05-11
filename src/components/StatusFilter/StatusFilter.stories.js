import StatusFilter from './StatusFilter';

export const Default = (args) => (
  <div style={{textAlign: 'center', marginTop: '30px'}}>
    <StatusFilter {...args} />
  </div>
)

const metadata = {
  title: 'StatusFilter',
  component: StatusFilter,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
};

export default metadata;
