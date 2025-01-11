import type { Meta, StoryObj } from '@storybook/react';

import { SocialContact } from '.';

const meta: Meta<typeof SocialContact> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: SocialContact,
  tags: ['autodocs'],
  title: 'Atoms/SocialContact',
};

export default meta;

type Story = StoryObj<typeof SocialContact>;

export const Default: Story = {};
