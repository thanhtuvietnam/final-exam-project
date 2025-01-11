import type { Meta, StoryObj } from '@storybook/react';

import { FilmBoxPlayer } from '.';

const meta: Meta<typeof FilmBoxPlayer> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: FilmBoxPlayer,
  tags: ['autodocs'],
  title: 'Atoms/FilmBoxPlayer',
};

export default meta;

type Story = StoryObj<typeof FilmBoxPlayer>;

export const Default: Story = {};
