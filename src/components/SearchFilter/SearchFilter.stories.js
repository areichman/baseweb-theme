import SearchFilter from './SearchFilter'
import StatusFilter from './StatusFilter'

export const Status = (args) => (
  <div style={{textAlign: 'center', marginTop: '30px'}}>
    <StatusFilter />
  </div>
)

const metadata = {
  title: 'SearchFilter',
  component: SearchFilter,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
};

export default metadata;
