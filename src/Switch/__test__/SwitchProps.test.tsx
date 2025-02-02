import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Switch from '../Switch';
import React from 'react';

describe('Test correct another props for Switch', () => {
  afterEach(cleanup);

  it('it should render ', () => {
    render(<Switch />);
    expect(screen.getByRole('checkbox')).toBeTruthy();
  });

  it('it should render with correct label', () => {
    render(<Switch label="Text" />);
    const label = screen.getByTestId('label').textContent;
    expect(label).toEqual('Text');
  });

  it('it should have correct id', () => {
    render(<Switch id="123456" />);
    const id = screen.getByRole('checkbox').id;
    expect(id).toBeTruthy();
    expect(id.valueOf()).toEqual('123456');
  });

  it('it should have correct props=required', () => {
    render(<Switch required label="Text" />);
    expect(screen.getByRole('checkbox').hasAttribute('required')).toBeTruthy();
    expect(screen.getByTestId('label').textContent).toEqual('Text*');
  });

  it('it should correct render with props=disabled', () => {
    const pressedCallback = jest.fn();

    render(<Switch disabled checked onChange={() => pressedCallback('bar')} />);
    const switcher = screen.getByRole('checkbox');
    expect(switcher.hasAttribute('disabled')).toBeTruthy();

    fireEvent.change(switcher);
    expect(switcher.hasAttribute('checked')).toBeTruthy();
  });

  it('it should have correct classes style', () => {
    render(<Switch classes={{ backgroundColor: 'red' }} />);
    const style = screen.getByTestId('switch-style').style;
    expect(style).toBeTruthy();
    expect(style.backgroundColor).toEqual('red');
  });
});
