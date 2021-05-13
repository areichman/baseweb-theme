import DownloadButton from './DownloadButton'

export const Basic = (args) => (
  <DownloadButton {...args} />
)

const metadata = {
  title: 'DownloadButton',
  component: DownloadButton,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
};

export default metadata;
