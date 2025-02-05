import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlinedButton: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const ContainedButton: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};

export const ChangedButton: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    classes: { backgroundColor: 'red' },
  },
};

export const TextButton: Story = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};
