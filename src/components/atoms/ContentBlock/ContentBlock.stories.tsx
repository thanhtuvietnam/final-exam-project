import type { Meta, StoryObj } from '@storybook/react';

import { ContentBlock } from '.';

const meta: Meta<typeof ContentBlock> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: ContentBlock,
  tags: ['autodocs'],
  title: 'Atoms/ContentBlock',
};

export default meta;

type Story = StoryObj<typeof ContentBlock>;

export const Default: Story = {};
