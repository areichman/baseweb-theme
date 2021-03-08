import React from 'react';
import { Button } from 'baseui/button';

export const Basic = (args) => (
  <Button {...args}>Click Me</Button>
)

const metadata = {
  title: 'Button',
  component: Button,
  argTypes: {
    kind: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'tertiary', 'minimal']
      },
      defaultValue: 'primary',
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['default', 'large', 'compact', 'mini'],
      },
      defaultValue: 'default',
    },
    disabled: {
      control: {
        type: 'inline-radio',
        options: [false, true]
      },
      defaultValue: false,
    },
  },
};

export default metadata;
