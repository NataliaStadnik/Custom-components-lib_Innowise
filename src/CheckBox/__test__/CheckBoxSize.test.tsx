import { cleanup, render, screen } from '@testing-library/react';
import Checkbox from '../CheckBox';
import React from 'react';

describe('Test correct props=size for CheckBox', () => {
  afterEach(cleanup);

  it('it should correct render with size=small', () => {
    render(<Checkbox size="small" />);
    const checkbox = screen.getByTestId('checkbox-size');
    expect(checkbox.className).toContain('checkbox-small');
  });

  it('it should correct render with size=medium', () => {
    render(<Checkbox size="medium" />);
    const checkbox = screen.getByTestId('checkbox-size');
    expect(checkbox.className).toContain('checkbox-medium');
  });

  it('it should correct render with size=large', () => {
    render(<Checkbox size="large" />);
    const checkbox = screen.getByTestId('checkbox-size');
    expect(checkbox.className).toContain('checkbox-large');
  });
});
