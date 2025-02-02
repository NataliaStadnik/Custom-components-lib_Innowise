import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Select from '../Select';
import React from 'react';

describe('Test correct another props for Select', () => {
  afterEach(cleanup);

  const optionsMock = [
    { label: 'ten', value: '10' },
    { label: 'twenty', value: '20' },
    { label: 'thirty', value: '30' },
  ];

  it('it should be Select in DOM with props=disabled', () => {
    const pressedCallback = jest.fn();

    render(<Select options={optionsMock} disabled />);
    const disabled = screen.getByTestId('select');
    expect(disabled.hasAttribute('disabled')).toBeTruthy();

    fireEvent.click(disabled);
    expect(pressedCallback).not.toHaveBeenCalled();
  });

  it('it should be Select in DOM with props=required', () => {
    render(<Select options={optionsMock} required label="Require" />);
    expect(screen.getByTestId('select').hasAttribute('required')).toBeTruthy();
    expect(screen.getByTestId('select-label').textContent).toBe('Require*');
  });

  it('it should be Select in DOM with props=readonly', () => {
    const pressedCallback = jest.fn();
    render(<Select options={optionsMock} readonly />);

    const input = screen.getByTestId('select');
    expect(input.hasAttribute('readonly')).toBeTruthy();

    fireEvent.click(input);
    expect(pressedCallback).not.toHaveBeenCalled();

    let nonExist = false;
    try {
      screen.getByRole('listbox');
    } catch {
      nonExist = true;
    }
    expect(nonExist).toEqual(true);
  });

  it('it should be Select in DOM with correct props=error', () => {
    render(<Select options={optionsMock} error helperText="Error" />);
    expect(screen.getByTestId('select').className).toContain('error-input-select');
    expect(screen.getByTestId('help-text').className).toContain('helper-error');
  });

  it('it should be Select in DOM with correct props=children', () => {
    render(<Select options={optionsMock} children={<p>Dom Element</p>} />);
    const child = screen.getByTestId('select-wrap').innerHTML.includes('<p>Dom Element</p>');
    expect(child).toBeTruthy();
  });

  it('it should be Select in DOM with correct props=classes', () => {
    render(<Select options={optionsMock} classes={{ backgroundColor: 'red' }} />);
    const style = screen.getByTestId('select').style;
    expect(style).toBeTruthy();
    expect(style.backgroundColor).toEqual('red');
  });

  it('it should have correct id', () => {
    render(<Select options={optionsMock} id="123456" />);
    const id = screen.getByTestId('form').id;
    expect(id).toBeTruthy();
    expect(id.valueOf()).toEqual('123456');
  });
});
