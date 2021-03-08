import React from 'react';
import { Tabs, Tab } from 'baseui/tabs-motion';

export const Basic = (args) => {
  const [activeKey, setActiveKey] = React.useState(0);

  return (
    <Tabs
      {...args}
      activeKey={activeKey}
      onChange={({activeKey}) => setActiveKey(activeKey)}
    >
      <Tab title="First">
        Content 1
      </Tab>
      <Tab title="Second">
        Content 2
      </Tab>
      <Tab title="Third">
        Content 3
      </Tab>
    </Tabs>
  )
}

const metadata = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    fill: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'intrinsic' },
      },
      control: {
        type: 'inline-radio',
        options: ['fixed', 'intrinsic']
      },
      defaultValue: 'intrinsic',
    },
  },
};

export default metadata;
