import type { Meta, StoryObj } from '@storybook/react';

import { InfoEpisodes } from '.';

const meta: Meta<typeof InfoEpisodes> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: InfoEpisodes,
  tags: ['autodocs'],
  title: 'Molecules/InfoEpisodes',
};

export default meta;

type Story = StoryObj<typeof InfoEpisodes>;

export const Default: Story = {};
