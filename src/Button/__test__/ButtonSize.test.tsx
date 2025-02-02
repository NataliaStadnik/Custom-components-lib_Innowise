import { cleanup, render, screen } from '@testing-library/react';
import Button from '../Button';
import React from 'react';

describe('Test correct props=size for Button component', () => {
  afterEach(cleanup);

  it('it should render with correct size=small', () => {
    render(<Button size="small">Hello World</Button>);
    const className = screen.getByRole('button').className;
    expect(className).toContain('button-small');
  });

  it('it should render with correct size=medium', () => {
    render(<Button size="medium">Hello World</Button>);
    const className = screen.getByRole('button').className;
    expect(className).toContain('button-medium');
  });

  it('it should render with correct size=large', () => {
    render(<Button size="large">Hello World</Button>);
    const className = screen.getByRole('button').className;
    expect(className).toContain('button-large');
  });
});
