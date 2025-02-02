import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';
import React from 'react';

describe('Test correct props for Modal component', () => {
  afterEach(cleanup);

  it('it should not be in DOM', () => {
    render(<Modal />);

    let nonExist = false;
    try {
      screen.getByTestId('parent-modal');
    } catch {
      nonExist = true;
    }
    expect(nonExist).toEqual(true);
  });

  it('it should be in DOM', () => {
    render(<Modal open />);
    expect(screen.getByTestId('parent-modal')).toBeTruthy();
  });

  it('it should be modal with parent-title in DOM', () => {
    render(<Modal open title="Parent title" />);
    expect(screen.getByTestId('parent-modal').textContent).toBe('Parent title');
  });

  it('it should be modal with parent-title and parent-descr in DOM', () => {
    render(<Modal open title="Parent title" descr="Parent descr" />);
    expect(screen.getByRole('heading').textContent).toBe('Parent title');
    expect(screen.getByRole('paragraph').textContent).toBe('Parent descr');
  });

  it('it should be modal with children props in DOM', () => {
    render(<Modal open title="Parent title" children={<div>Child React Element</div>} />);

    const child = screen
      .getByTestId('parent-modal')
      .innerHTML.includes('<div>Child React Element</div>');
    expect(child).toBeTruthy();
  });

  it('it should have correct props=onClose', () => {
    const pressedCallback = jest.fn();
    render(<Modal open title="Title" onClose={() => pressedCallback('bar')} />);

    fireEvent.click(screen.getByTestId('parent-modal'));
    expect(pressedCallback).toHaveBeenCalled();
  });
});
