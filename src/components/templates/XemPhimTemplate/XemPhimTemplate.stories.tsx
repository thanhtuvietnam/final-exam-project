import type { Meta, StoryObj } from '@storybook/react';

import { XemPhimTemplate } from '.';

const meta: Meta<typeof XemPhimTemplate> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: XemPhimTemplate,
  tags: ['autodocs'],
  title: 'Templates/XemPhimTemplate',
};

export default meta;

type Story = StoryObj<typeof XemPhimTemplate>;

export const Default: Story = {};
