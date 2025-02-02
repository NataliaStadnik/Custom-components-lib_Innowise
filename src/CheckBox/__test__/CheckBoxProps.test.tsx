import { cleanup, render, screen } from '@testing-library/react';
import Checkbox from '../CheckBox';
import React from 'react';

describe('Test correct another props for CheckBox', () => {
  afterEach(cleanup);

  it('it should render Checkbox', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeTruthy();
  });

  it('it should render with Correct label', () => {
    render(<Checkbox label="Hello world" />);
    expect(screen.getByTestId('label').textContent).toEqual('Hello world');
  });

  it('it should correct render with props=disabled', () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.hasAttribute('disabled')).toBeTruthy();
  });

  it('it should have correct id', () => {
    render(<Checkbox id="123456" />);
    const id = screen.getByRole('checkbox').id;
    expect(id).toBeTruthy();
    expect(id.valueOf()).toEqual('123456');
  });

  it('it should have correct classes style', () => {
    render(<Checkbox classes={{ backgroundColor: 'red' }} />);
    const style = screen.getByTestId('checkbox-style').style;
    expect(style).toBeTruthy();
    expect(style.backgroundColor).toEqual('red');
  });

  it('it should have correct props=required', () => {
    render(<Checkbox required label="Text" />);
    expect(screen.getByRole('checkbox').hasAttribute('required')).toBeTruthy();
    expect(screen.getByTestId('label').textContent).toEqual('Text*');
  });
});
