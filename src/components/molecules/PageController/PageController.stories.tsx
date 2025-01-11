import type { Meta, StoryObj } from '@storybook/react';

import { PageController } from '.';

const meta: Meta<typeof PageController> = {
  title: 'Molecules/PageController',
  component: PageController,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof PageController>;

export const Default: Story = {};
