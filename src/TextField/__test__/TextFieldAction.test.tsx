import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '../TextField';
import React from 'react';

describe('Test correct with actions props for TextField', () => {
  it('it should be TextField in DOM with props=autoFocus', () => {
    render(<TextField autoFocus />);
    const element = screen.getByTestId('TextField');
    fireEvent.focus(element);
    expect(document.activeElement).toBe(element);
  });

  it('it should be TextField in DOM with props=onChange', () => {
    const pressedCallback = jest.fn();
    render(<TextField onChange={() => pressedCallback('bar')} />);

    fireEvent.change(screen.getByTestId('TextField'), { target: { value: 'A' } });
    expect(pressedCallback).toHaveBeenCalled();
  });

  it('it should be TextField in DOM with props=inputRef', () => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      current: { width: 1200 },
    });
    const onMeasure = jest.fn();
    render(<TextField onChange={onMeasure} />);

    const textfield = screen.getByTestId('TextField');
    textfield.addEventListener('change', onMeasure);
    expect(onMeasure).toHaveBeenCalledTimes(0);

    textfield.dispatchEvent(new Event('change', { bubbles: true }));
    expect(onMeasure).toHaveBeenCalledTimes(1);
    expect(onMeasure).toHaveBeenCalled();
  });
});
