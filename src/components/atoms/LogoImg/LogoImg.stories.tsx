import type { Meta, StoryObj } from '@storybook/react';

import { LogoImg } from '.';

const meta: Meta<typeof LogoImg> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: LogoImg,
  tags: ['autodocs'],
  title: 'Atoms/LogoImg',
};

export default meta;

type Story = StoryObj<typeof LogoImg>;

export const Default: Story = {};
