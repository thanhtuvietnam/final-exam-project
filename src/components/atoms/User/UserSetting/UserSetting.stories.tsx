import type { Meta, StoryObj } from '@storybook/react';

import { UserSetting } from '.';

const meta: Meta<typeof UserSetting> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: UserSetting,
  tags: ['autodocs'],
  title: 'Atoms/UserSetting',
};

export default meta;

type Story = StoryObj<typeof UserSetting>;

export const Default: Story = {};
