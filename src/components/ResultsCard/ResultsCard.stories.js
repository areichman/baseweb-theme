import ResultsCard from './ResultsCard'

export const Basic = () => (
  <ResultsCard name="Google" count="1000" />
)

export const Multiple = () => {
  const style = {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  }
  return (
    <div style={style}>
      <ResultsCard name="Google" count="1000" />
      <ResultsCard name="Facebook" count="2000" />
      <ResultsCard name="Instagram" count="3000" />
    </div>
  )
}

const metadata = {
  title: 'ResultsCard',
  component: ResultsCard,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
};

export default metadata;
