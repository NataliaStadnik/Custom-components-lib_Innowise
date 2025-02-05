import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../TextField';
import React from 'react';

describe('Test correct with another props for TextField', () => {
  it('it should be TextField in DOM with props=disabled', () => {
    const pressedCallback = jest.fn();

    render(<TextField label="Label text" disabled />);
    const disabled = screen.getByTestId('TextField');
    expect(disabled).toBeDisabled();

    fireEvent.click(disabled);
    expect(pressedCallback).not.toHaveBeenCalled();
  });

  it('it should be TextField in DOM with props=required', () => {
    render(<TextField required label="Require Text" />);
    expect(screen.getByTestId('TextField').hasAttribute('required')).toBeTruthy();
    expect(screen.getByTestId('TextField-label').textContent).toBe('Require Text*');
  });

  it('it should be TextField in DOM with props=readonly', () => {
    const pressedCallback = jest.fn();
    render(<TextField readonly />);

    const input = screen.getByTestId('TextField');
    expect(input.hasAttribute('readonly')).toBeTruthy();

    fireEvent.input(input);
    expect(pressedCallback).not.toHaveBeenCalled();
  });

  it('it should be TextField in DOM with correct props=error', () => {
    render(<TextField error helperText="Error" />);
    expect(screen.getByTestId('TextField').className).toContain('error-input-');
    expect(screen.getByTestId('help-text').className).toContain('error');
  });

  it('it should be TextField in DOM with correct props=children', () => {
    render(<TextField children={<p>Dom Element</p>} />);
    const child = screen.getByTestId('textfield-wrap').innerHTML.includes('<p>Dom Element</p>');
    expect(child).toBeTruthy();
  });

  it('it should be TextField in DOM with correct props=classes', () => {
    render(<TextField classes={'textfield-red'} />);
    const style = screen.getByTestId('TextField').className;
    expect(style).toContain('textfield-red');
  });
});
