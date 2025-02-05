import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../Modal/Modal';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
  args: {
    open: true,
    title: 'Text in a modal',
    descr: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
  },
};

export const ModalWithChild: Story = {
  args: {
    open: true,
    title: 'Text in a modal',
    descr: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    childTitle: 'Text in a Child modal',
    childDescr: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
  },
};
