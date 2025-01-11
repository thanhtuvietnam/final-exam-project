import type { Meta, StoryObj } from '@storybook/react';

import { SectionCards } from '.';

const meta: Meta<typeof SectionCards> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SectionCards,
  tags: ['autodocs'],
  title: 'Atoms/SectionCards',
};

export default meta;

type Story = StoryObj<typeof SectionCards>;

export const Default: Story = {};
