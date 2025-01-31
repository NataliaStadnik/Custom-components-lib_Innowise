import type { Meta, StoryObj } from '@storybook/react';
import CheckBox from '../CheckBox/CheckBox';

const meta = {
  title: 'Example/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StartBox: Story = {
  args: {
    size: 'small',
  },
};

export const UncheckedBox: Story = {
  args: {
    defaultChecked: false,
  },
};

export const DisabledCheckBox: Story = {
  args: {
    disabled: true,
  },
};
