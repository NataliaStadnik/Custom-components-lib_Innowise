import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../CheckBox';
import React from 'react';

it('it should render with props=checked', () => {
  const pressedCallback = jest.fn();

  render(<Checkbox checked onChange={() => pressedCallback('bar')} />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox.hasAttribute('checked')).toBeTruthy();

  fireEvent.change(checkbox);
  expect(screen.getByRole('checkbox').hasAttribute('checked')).toBeTruthy();
});

it('it should render with props=onChange', () => {
  const pressedCallback = jest.fn();
  render(<Checkbox onChange={() => pressedCallback} />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.change(checkbox, { target: { checked: true } });

  checkbox.addEventListener('change', pressedCallback);
  expect(pressedCallback).toHaveBeenCalledTimes(0);

  checkbox.dispatchEvent(new Event('change', { bubbles: true }));
  expect(pressedCallback).toHaveBeenCalledTimes(1);
});

it('it should have correct props=inputRef', () => {
  jest.spyOn(React, 'useRef').mockReturnValue({
    current: { width: 1200 },
  });
  const onMeasure = jest.fn();
  render(<Checkbox onChange={onMeasure} />);

  const checkbox = screen.getByRole('checkbox');
  checkbox.addEventListener('change', onMeasure);
  expect(onMeasure).toHaveBeenCalledTimes(0);

  checkbox.dispatchEvent(new Event('change', { bubbles: true }));
  expect(onMeasure).toHaveBeenCalledTimes(1);
  expect(onMeasure).toHaveBeenCalled();
});
