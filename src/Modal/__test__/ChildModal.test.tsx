import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';
import React from 'react';

describe('Test correct props for ChildModal', () => {
  it('it should be child-modal with title and descr  in DOM', () => {
    render(
      <Modal
        open
        title="Parent title"
        descr="Parent descr"
        childTitle="Child Title"
        childDescr="Child descr"
      />,
    );

    const btn = screen.getByText('Open child modal');
    expect(btn).toBeTruthy();
    fireEvent.click(btn);

    const childModal = screen.getByTestId('child-modal');
    expect(childModal).toBeTruthy();
    expect(childModal.getElementsByClassName('modal-title')[0].textContent).toBe('Child Title');
    expect(childModal.getElementsByClassName('modal-text')[0].textContent).toBe('Child descr');

    const btnClose = screen.getByText('Close child modal');
    expect(btnClose).toBeTruthy();
    fireEvent.click(btnClose);

    let nonExist = false;
    try {
      screen.getByTestId('child-modal');
    } catch {
      nonExist = true;
    }
    expect(nonExist).toEqual(true);
  });
});
