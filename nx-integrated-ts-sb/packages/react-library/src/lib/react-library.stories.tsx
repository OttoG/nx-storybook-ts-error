import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactLibrary } from './react-library';

const Story: ComponentMeta<typeof ReactLibrary> = {
  component: ReactLibrary,
  title: 'ReactLibrary',
};
export default Story;

const Template: ComponentStory<typeof ReactLibrary> = (args) => (
  <ReactLibrary {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
