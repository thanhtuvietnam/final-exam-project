import type { Meta, StoryObj } from '@storybook/react';

import { CardInfo } from '.';

const meta: Meta<typeof CardInfo> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: CardInfo,
  tags: ['autodocs'],
  title: 'Molecules/CardInfo',
};

export default meta;

type Story = StoryObj<typeof CardInfo>;

export const Default: Story = {};
