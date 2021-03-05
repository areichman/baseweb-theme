import React from 'react';
import { Button } from 'baseui/button';

export const Primary = () => (
  <Button>Click Me</Button>
)

export const Secondary = () => (
  <Button kind="secondary">Click Me</Button>
)

export const Tertiary = () => (
  <Button kind="tertiary">Click Me</Button>
)

const metadata = {
  title: 'Button',
  component: Button,
};

export default metadata;
