import type { Meta, StoryObj } from '@storybook/react';

import { SliderTab } from '.';

const meta: Meta<typeof SliderTab> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SliderTab,
  tags: ['autodocs'],
  title: 'Atoms/SliderTab',
};

export default meta;

type Story = StoryObj<typeof SliderTab>;

export const Default: Story = {};
