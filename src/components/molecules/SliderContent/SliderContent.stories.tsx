import type { Meta, StoryObj } from '@storybook/react';

import { SliderContent } from '.';

const meta: Meta<typeof SliderContent> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SliderContent,
  tags: ['autodocs'],
  title: 'Molecules/SliderContent',
};

export default meta;

type Story = StoryObj<typeof SliderContent>;

export const Default: Story = {};
