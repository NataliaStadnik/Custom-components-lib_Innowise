import { render, screen } from '@testing-library/react';
import TextField from '../TextField';
import React from 'react';

describe('Test correct props=variant for TextField', () => {
  it('it should be TextField in DOM with props=outlined', () => {
    render(<TextField variant="outlined" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.className).toContain('textfield-input-outlined');
  });

  it('it should be TextField in DOM with props=filled', () => {
    render(<TextField variant="filled" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.className).toContain('textfield-input-filled');
  });

  it('it should be TextField in DOM with props=standart', () => {
    render(<TextField variant="standart" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.className).toContain('textfield-input-standart');
  });
});
