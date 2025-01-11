import type { Meta, StoryObj } from '@storybook/react';

import { FilmSections } from '.';

const meta: Meta<typeof FilmSections> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: FilmSections,
  tags: ['autodocs'],
  title: 'Molecules/FilmSections',
};

export default meta;

type Story = StoryObj<typeof FilmSections>;

export const Default: Story = {};
