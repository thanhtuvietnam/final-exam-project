import type { Meta, StoryObj } from '@storybook/react';

import { MainTemplate } from '.';

const meta: Meta<typeof MainTemplate> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: MainTemplate,
  tags: ['autodocs'],
  title: 'Templates/MainTemplate',
};

export default meta;

type Story = StoryObj<typeof MainTemplate>;

export const Default: Story = {};
