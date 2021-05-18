import SearchBox from './SearchBox'

export const Basic = () => (
  <SearchBox />
)

const metadata = {
  title: 'SearchBox',
  component: SearchBox,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
};

export default metadata;
