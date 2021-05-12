import DateFilter from './DateFilter'

export const Basic = (args) => (
  <DateFilter {...args} />
)

const metadata = {
  title: 'DateFilter',
  component: DateFilter,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
};

export default metadata;
