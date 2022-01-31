import React from 'react';

import { ContentContainer } from '../components/ContentContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ContentContainer',
  component: ContentContainer,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContentContainer {...args} />;

export const Container1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Container1.args = {
  shapeType: true,  
};