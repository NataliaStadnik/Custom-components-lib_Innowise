import type { Meta, StoryObj } from '@storybook/react';
import Select from '../Select/Select';

const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const mocksObject = [
  { value: '10', label: 'Ten' },
  { value: '20', label: 'Twenty' },
  { value: '30', label: 'Thirty' },
];

export const SelectWithLabel: Story = {
  args: {
    options: mocksObject,
    label: 'Age',
  },
};

export const SelectWithoutLabel: Story = {
  args: {
    options: mocksObject,
  },
};

export const SelectAutoFocus: Story = {
  args: {
    options: mocksObject,
    autoFocus: true,
  },
};

export const SelectReadonly: Story = {
  args: {
    options: mocksObject,
    readonly: true,
  },
};

export const SelectError: Story = {
  args: {
    options: mocksObject,
    helperText: 'Some error',
    error: true,
  },
};
