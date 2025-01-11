import type { Meta, StoryObj } from '@storybook/react';

import { BlockInfoSection } from '.';

const meta: Meta<typeof BlockInfoSection> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: BlockInfoSection,
  tags: ['autodocs'],
  title: 'Molecules/BlockInfoSection',
};

export default meta;

type Story = StoryObj<typeof BlockInfoSection>;

export const Default: Story = {};
