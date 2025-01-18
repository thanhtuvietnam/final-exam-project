import type { Meta, StoryObj } from '@storybook/react';

import { VidStackPlayer } from '.';

const meta: Meta<typeof VidStackPlayer> = {
  title: 'Molecules/VidStackPlayer',
  component: VidStackPlayer,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof VidStackPlayer>;

export const Default: Story = {};
