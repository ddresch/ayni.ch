import React from 'react';

import { Shape } from '../components/Shape';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Shape',
  component: Shape,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Shape {...args} />;

export const Shape1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Shape1.args = {
  shiftedOutline: true,
  primaryColor: '#fffec7',
  secondaryColor: '#ffffff',
  outlineColor: '#9d9d9d',
};