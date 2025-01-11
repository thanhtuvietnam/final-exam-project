import type { Meta, StoryObj } from '@storybook/react';

import { ArrowBtn } from '.';

const meta: Meta<typeof ArrowBtn> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: ArrowBtn,
  tags: ['autodocs'],
  title: 'Atoms/ArrowBtn',
};

export default meta;

type Story = StoryObj<typeof ArrowBtn>;

export const Default: Story = {};
