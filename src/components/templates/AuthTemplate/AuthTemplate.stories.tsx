import type { Meta, StoryObj } from '@storybook/react';

import { AuthTemplate } from '.';

const meta: Meta<typeof AuthTemplate> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: AuthTemplate,
  tags: ['autodocs'],
  title: 'Templates/AuthTemplate',
};

export default meta;

type Story = StoryObj<typeof AuthTemplate>;

export const Default: Story = {};
