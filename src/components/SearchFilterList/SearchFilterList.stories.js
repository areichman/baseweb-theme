import SearchFilterList from './SearchFilterList'

export const Basic = () => (
  <SearchFilterList />
)

const metadata = {
  title: 'SearchFilterList',
  component: SearchFilterList,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
};

export default metadata;
