import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

const meta: Meta<typeof Card> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Molecules/Card',
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
