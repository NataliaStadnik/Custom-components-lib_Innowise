import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Select from '../Select';
import React from 'react';

describe('Test correct another props for Select', () => {
  afterEach(cleanup);

  const optionsMock = [
    { label: 'ten', value: '10' },
    { label: 'twenty', value: '20' },
    { label: 'thirty', value: '30' },
  ];

  it('it should be Select in DOM with props=onChange', () => {
    const pressedCallback = jest.fn();
    render(<Select options={optionsMock} onChange={() => pressedCallback('bar')} />);

    fireEvent.change(screen.getByTestId('select'));
    expect(pressedCallback).toHaveBeenCalled();
  });

  it('it should be Select in DOM with props=autoFocus', () => {
    render(<Select options={optionsMock} autoFocus />);
    const element = screen.getByTestId('select');
    fireEvent.focus(element);
    expect(document.activeElement).toBe(element);
  });

  it('it should be Select in DOM with props=options', () => {
    render(<Select options={optionsMock} />);
    const element = screen.getByTestId('select');

    fireEvent.click(element);
    expect(screen.getByRole('listbox')).toBeTruthy();

    const elem = screen.getByTestId('20');
    fireEvent.click(elem);
    expect(screen.getByTestId('select').getAttribute('value')).toBe('20');
    expect(screen.getByTestId('curr-value').textContent).toBe('twenty');
  });

  it('it should be Select in DOM with props=inputRef', () => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      current: { width: 1200 },
    });
    const onMeasure = jest.fn();
    render(<Select options={optionsMock} onChange={onMeasure} />);
    expect(onMeasure).toHaveBeenCalled();
  });
});
