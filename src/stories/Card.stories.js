import React from 'react';
import { Card, StyledBody } from 'baseui/card';
import styled from 'styled-components';

export const Basic = () => (
  <Card title="Default Card">
    <StyledBody>Hello World</StyledBody>
  </Card>
);

const StyledCard = styled(Card)`
  border-width: 1px;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.1);
`;

export const Styled = () => (
  <StyledCard title="Styled Card">
    <StyledBody>Use styled-components to change the border style.</StyledBody>
  </StyledCard>
);

const metadata = {
  title: 'Card',
  component: Card,
  parameters:{
    controls: {
      disabled: true,
      hideNoControlsWarning: true,
    },
  },
}

export default metadata;
