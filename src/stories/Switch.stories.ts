import type { Meta, StoryObj } from '@storybook/react';
import Switch from '../Switch/Switch';

const meta = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchWithLabel: Story = {
  args: {
    label: 'Age',
  },
};

export const SwitchChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const SwitchDisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};
