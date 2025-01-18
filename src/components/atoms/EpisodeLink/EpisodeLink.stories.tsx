import type { Meta, StoryObj } from '@storybook/react';

import { EpisodeLink } from '.';

const meta: Meta<typeof EpisodeLink> = {
  title: 'Atoms/EpisodeLink',
  component: EpisodeLink,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof EpisodeLink>;

export const Default: Story = {};
