import type { Meta, StoryObj } from '@storybook/react';

import { InputField } from '.';

const meta: Meta<typeof InputField> = {
  args: {
    children: 'Example',
    variant: 'default',
  },
  component: InputField,
  tags: ['autodocs'],
  title: 'Atoms/InputField',
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {};
