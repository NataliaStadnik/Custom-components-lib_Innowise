import { cleanup, render, screen } from '@testing-library/react';
import TextField from '../TextField';
import React from 'react';

describe('Test correct props=size for TextField', () => {
  afterEach(cleanup);

  it('it should be TextField in DOM with size=small', () => {
    render(<TextField size="small" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.className).toContain('textfield-input-small');
  });

  it('it should be TextField in DOM with size=medium', () => {
    render(<TextField size="medium" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.className).toContain('textfield-input-medium');
  });
});
