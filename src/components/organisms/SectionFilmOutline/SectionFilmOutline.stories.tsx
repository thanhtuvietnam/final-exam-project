import type { Meta, StoryObj } from '@storybook/react';

import { SectionFilmOutline } from '.';

const meta: Meta<typeof SectionFilmOutline> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SectionFilmOutline,
  tags: ['autodocs'],
  title: 'Organisms/SectionFilmOutline',
};

export default meta;

type Story = StoryObj<typeof SectionFilmOutline>;

export const Default: Story = {};
