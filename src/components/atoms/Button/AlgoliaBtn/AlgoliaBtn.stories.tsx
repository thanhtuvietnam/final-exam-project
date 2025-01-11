import type { Meta, StoryObj } from '@storybook/react';

import { AlgoliaBtn } from '.';

const meta: Meta<typeof AlgoliaBtn> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: AlgoliaBtn,
  tags: ['autodocs'],
  title: 'Atoms/AlgoliaBtn',
};

export default meta;

type Story = StoryObj<typeof AlgoliaBtn>;

export const Default: Story = {};
