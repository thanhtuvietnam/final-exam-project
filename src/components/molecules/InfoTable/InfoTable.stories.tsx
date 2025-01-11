import type { Meta, StoryObj } from '@storybook/react';

import { InfoTable } from '.';

const meta: Meta<typeof InfoTable> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: InfoTable,
  tags: ['autodocs'],
  title: 'Molecules/InfoTable',
};

export default meta;

type Story = StoryObj<typeof InfoTable>;

export const Default: Story = {};
