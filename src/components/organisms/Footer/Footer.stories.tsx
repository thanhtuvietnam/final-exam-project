import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '.';

const meta: Meta<typeof Footer> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: Footer,
  tags: ['autodocs'],
  title: 'Organisms/Footer',
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
