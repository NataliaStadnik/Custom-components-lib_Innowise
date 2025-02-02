import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../CheckBox';
import React from 'react';

it('it should render with props=defaultChecked and be controlled', () => {
  const pressedCallback = jest.fn();

  render(<Checkbox defaultChecked onChange={() => pressedCallback('bar')} />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox.hasAttribute('checked')).toBeTruthy();

  fireEvent.change(checkbox);
  expect(pressedCallback).toHaveBeenCalled();
});

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
  render(<Checkbox onChange={() => pressedCallback('bar')} />);

  fireEvent.change(screen.getByRole('checkbox'));
  expect(pressedCallback).toHaveBeenCalled();
});

it('it should have correct props=inputRef', () => {
  jest.spyOn(React, 'useRef').mockReturnValue({
    current: { width: 1200 },
  });
  const onMeasure = jest.fn();
  render(<Checkbox onChange={onMeasure} />);
  expect(onMeasure).toHaveBeenCalled();
});
