import type { Meta, StoryObj } from '@storybook/react';

import { SectionTitle } from '.';

const meta: Meta<typeof SectionTitle> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SectionTitle,
  tags: ['autodocs'],
  title: 'Atoms/SectionTitle',
};

export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {};
