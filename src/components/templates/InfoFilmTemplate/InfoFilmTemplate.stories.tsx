import type { Meta, StoryObj } from '@storybook/react';

import { InfoFilmTemplate } from '.';

const meta: Meta<typeof InfoFilmTemplate> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: InfoFilmTemplate,
  tags: ['autodocs'],
  title: 'Templates/InfoFilmTemplate',
};

export default meta;

type Story = StoryObj<typeof InfoFilmTemplate>;

export const Default: Story = {};
