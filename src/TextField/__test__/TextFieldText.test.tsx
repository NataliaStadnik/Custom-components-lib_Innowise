import { render, screen } from '@testing-library/react';
import TextField from '../TextField';
import React from 'react';

describe('Test correct props=label, placeholder, helperText, defaultValue for TextField', () => {
  it('it should be TextField in DOM with correct label', () => {
    render(<TextField label="Label text" />);
    expect(screen.getByTestId('TextField-label').textContent).toBe('Label text');
  });

  it('it should be TextField in DOM with correct helperText', () => {
    render(<TextField helperText="Helper text" />);
    expect(screen.getByTestId('help-text').textContent).toBe('Helper text');
  });

  it('it should be TextField in DOM with correct placeHolder', () => {
    render(<TextField placeHolder="Placeholder" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('placeholder')).toBe('Placeholder');
  });

  it('it should be TextField in DOM with correct defaultValue', () => {
    render(<TextField values="Hello World" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('value')).toBe('Hello World');
  });
});
