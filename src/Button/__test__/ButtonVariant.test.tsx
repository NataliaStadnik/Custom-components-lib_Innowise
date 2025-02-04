import { render, screen } from '@testing-library/react';
import Button from '../Button';
import React from 'react';

describe('Test correct props=variant for Button component', () => {
  it('it should render with correct variant=outlined', () => {
    render(<Button variant="outlined">Hello World</Button>);
    const className = screen.getByRole('button').className;
    expect(className).toContain('button-outlined');
  });

  it('it should render with correct variant=contained', () => {
    render(<Button variant="contained">Hello World</Button>);
    const className = screen.getByRole('button').className;
    expect(className).toContain('button-contained');
  });

  it('it should render with correct variant=text', () => {
    render(<Button variant="text">Hello World</Button>);
    const className = screen.getByRole('button').className;
    expect(className).toContain('button-text');
  });
});
