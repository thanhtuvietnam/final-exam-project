import type { Meta, StoryObj } from '@storybook/react';

import { FilmBox } from '.';

const meta: Meta<typeof FilmBox> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: FilmBox,
  tags: ['autodocs'],
  title: 'Molecules/FilmBox',
};

export default meta;

type Story = StoryObj<typeof FilmBox>;

export const Default: Story = {};
