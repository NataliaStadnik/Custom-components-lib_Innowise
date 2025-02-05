import type { Meta, StoryObj } from '@storybook/react';
import TextField from '../TextField/TextField';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchWithLabel: Story = {
  args: {
    label: 'Age',
  },
};

export const TextFieldOutlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
  },
};

export const TextfieldFilled: Story = {
  args: {
    label: 'Filled',
    variant: 'filled',
    autoFocus: true,
  },
};

export const TextfieldStandart: Story = {
  args: {
    label: 'Standart',
    variant: 'standart',
    size: 'small',
  },
};

export const TextfielTime: Story = {
  args: {
    label: 'Time',
    variant: 'filled',
    type: 'time',
  },
};

export const TextfielPlaceholder: Story = {
  args: {
    label: 'Title',
    variant: 'standart',
    placeHolder: 'Placeholder',
  },
};

export const TextfielHelperText: Story = {
  args: {
    label: 'Helper',
    variant: 'standart',
    helperText: 'Helper text',
    error: true,
  },
};
