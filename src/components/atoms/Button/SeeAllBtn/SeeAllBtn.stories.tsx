import type { Meta, StoryObj } from '@storybook/react';

import { SeeAllBtn } from '.';

const meta: Meta<typeof SeeAllBtn> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SeeAllBtn,
  tags: ['autodocs'],
  title: 'Atoms/SeeAllBtn',
};

export default meta;

type Story = StoryObj<typeof SeeAllBtn>;

export const Default: Story = {};
