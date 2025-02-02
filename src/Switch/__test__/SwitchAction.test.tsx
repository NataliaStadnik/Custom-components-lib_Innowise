import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Switch from '../Switch';
import React from 'react';

describe('Test correct another props for Switch', () => {
  afterEach(cleanup);

  it('it should correct render with props=defaultChecked', () => {
    const pressedCallback = jest.fn();
    render(<Switch defaultChecked onChange={() => pressedCallback('bar')} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.hasAttribute('checked')).toBeTruthy();

    fireEvent.change(checkbox);
    expect(pressedCallback).toHaveBeenCalled();
  });

  it('it should correct render with props=checked', () => {
    const pressedCallback = jest.fn();
    render(<Switch checked onChange={() => pressedCallback('bar')} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.hasAttribute('checked')).toBeTruthy();
  });

  it('it should correct render with props=onChange', () => {
    const pressedCallback = jest.fn();
    render(<Switch onChange={() => pressedCallback('bar')} />);

    fireEvent.change(screen.getByRole('checkbox'));
    expect(pressedCallback).toHaveBeenCalled();
  });

  it('it should correct render with props=InputRef', () => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      current: { width: 1200 },
    });
    const onMeasure = jest.fn();
    render(<Switch onChange={onMeasure} />);
    expect(onMeasure).toHaveBeenCalled();
  });
});
