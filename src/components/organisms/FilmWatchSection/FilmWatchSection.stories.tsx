import type { Meta, StoryObj } from '@storybook/react';

import { FilmWatchSection } from '.';

const meta: Meta<typeof FilmWatchSection> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: FilmWatchSection,
  tags: ['autodocs'],
  title: 'Organisms/FilmWatchSection',
};

export default meta;

type Story = StoryObj<typeof FilmWatchSection>;

export const Default: Story = {};
