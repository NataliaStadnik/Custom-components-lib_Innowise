import { cleanup, render, screen } from '@testing-library/react';
import TextField from '../TextField';
import React from 'react';

describe('Test correct props=type for TextField', () => {
  afterEach(cleanup);

  it('it should be TextField in DOM with type=text', () => {
    render(<TextField type="text" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('type')).toBe('text');
  });

  it('it should be TextField in DOM with type=password', () => {
    render(<TextField type="password" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('type')).toBe('password');
  });

  it('it should be TextField in DOM with type=number', () => {
    render(<TextField type="number" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('type')).toBe('number');
  });

  it('it should be TextField in DOM with type=search', () => {
    render(<TextField type="search" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('type')).toBe('search');
  });

  it('it should be TextField in DOM with type=time', () => {
    render(<TextField type="time" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('type')).toBe('time');
  });

  it('it should be TextField in DOM with type=month', () => {
    render(<TextField type="month" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('type')).toBe('month');
  });

  it('it should be TextField in DOM with type=email', () => {
    render(<TextField type="email" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('type')).toBe('email');
  });

  it('it should be TextField in DOM with type=date', () => {
    render(<TextField type="date" />);
    const textfield = screen.getByTestId('TextField');
    expect(textfield.getAttribute('type')).toBe('date');
  });
});
