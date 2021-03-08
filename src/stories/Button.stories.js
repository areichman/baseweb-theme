import React from 'react';
import { Button } from 'baseui/button';
import styled from 'styled-components';

export const Basic = (args) => (
  <Button {...args}>Click Me</Button>
)

export const Styled = (args) => {
  const StyledButton = styled(Button)`
    width: 100%;
  `;
  return <StyledButton {...args}>Styled Button</StyledButton>;
}

export const All = () => (
  <React.Fragment>
    <Button>Primary</Button>&nbsp;
    <Button kind="secondary">Secondary</Button>&nbsp;
    <Button kind="tertiary">Tertiary</Button>&nbsp;
    <Button kind="minimal">Minimal</Button>&nbsp;
  </React.Fragment>
)

All.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
};

const metadata = {
  title: 'Button',
  component: Button,
  argTypes: {
    kind: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'tertiary', 'minimal']
      },
      defaultValue: 'primary',
    },
    size: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'inline-radio',
        options: ['default', 'large', 'compact', 'mini'],
      },
      defaultValue: 'default',
    },
    disabled: {
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'inline-radio',
        options: [false, true]
      },
      defaultValue: false,
    },
  },
};

export default metadata;
