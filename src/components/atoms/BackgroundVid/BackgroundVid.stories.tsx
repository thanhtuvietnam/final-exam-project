import type { Meta, StoryObj } from '@storybook/react';

import { BackgroundVid } from '.';

const meta: Meta<typeof BackgroundVid> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: BackgroundVid,
  tags: ['autodocs'],
  title: 'Atoms/BackgroundVid',
};

export default meta;

type Story = StoryObj<typeof BackgroundVid>;

export const Default: Story = {};
