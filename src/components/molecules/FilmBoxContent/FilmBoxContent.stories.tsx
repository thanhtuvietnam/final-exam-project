import type { Meta, StoryObj } from '@storybook/react';

import { FilmBoxContent } from '.';

const meta: Meta<typeof FilmBoxContent> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: FilmBoxContent,
  tags: ['autodocs'],
  title: 'Molecules/FilmBoxContent',
};

export default meta;

type Story = StoryObj<typeof FilmBoxContent>;

export const Default: Story = {};
