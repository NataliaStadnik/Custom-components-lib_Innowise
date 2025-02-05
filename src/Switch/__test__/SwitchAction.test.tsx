import { fireEvent, render, screen } from '@testing-library/react';
import Switch from '../Switch';
import React from 'react';

describe('Test correct another props for Switch', () => {
  it('it should correct render with props=checked', () => {
    const pressedCallback = jest.fn();
    render(<Switch checked onChange={() => pressedCallback('bar')} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.hasAttribute('checked')).toBeTruthy();
  });

  it('it should correct render with props=onChange', () => {
    const pressedCallback = jest.fn();
    render(<Switch onChange={() => pressedCallback} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.change(checkbox, { target: { checked: true } });

    checkbox.addEventListener('change', pressedCallback);
    expect(pressedCallback).toHaveBeenCalledTimes(0);

    checkbox.dispatchEvent(new Event('change', { bubbles: true }));
    expect(pressedCallback).toHaveBeenCalledTimes(1);
  });

  it('it should correct render with props=InputRef', () => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      current: { width: 1200 },
    });
    const onMeasure = jest.fn();
    render(<Switch onChange={onMeasure} />);

    const switchs = screen.getByRole('checkbox');
    switchs.addEventListener('change', onMeasure);
    expect(onMeasure).toHaveBeenCalledTimes(0);

    switchs.dispatchEvent(new Event('change', { bubbles: true }));
    expect(onMeasure).toHaveBeenCalledTimes(1);
    expect(onMeasure).toHaveBeenCalled();
  });
});
