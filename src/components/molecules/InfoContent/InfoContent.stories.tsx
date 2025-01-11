import type { Meta, StoryObj } from '@storybook/react';

import { InfoContent } from '.';

const meta: Meta<typeof InfoContent> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: InfoContent,
  tags: ['autodocs'],
  title: 'Molecules/InfoContent',
};

export default meta;

type Story = StoryObj<typeof InfoContent>;

export const Default: Story = {};
