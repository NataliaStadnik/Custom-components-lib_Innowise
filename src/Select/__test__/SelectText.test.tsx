import { fireEvent, render, screen } from '@testing-library/react';
import Select from '../Select';
import React from 'react';

describe('Test correct props=label, helperText, defaultValue for Select', () => {
  const optionsMock = [
    { label: 'ten', value: '10' },
    { label: 'twenty', value: '20' },
    { label: 'thirty', value: '30' },
  ];
  it('it should be Select in DOM with correct label', () => {
    render(<Select options={optionsMock} label="Label text" />);
    expect(screen.getByTestId('select-label').textContent).toBe('Label text');
  });

  it('it should be Select in DOM with correct helperText', () => {
    render(<Select options={optionsMock} helperText="Helper text" />);
    expect(screen.getByTestId('help-text').textContent).toBe('Helper text');
  });

  it('it should be Select in DOM with correct props=selectedItem', () => {
    render(<Select options={optionsMock} selectedItem="20" />);
    const select = screen.getByTestId('select');
    expect(select.getAttribute('value')).toBe('20');

    fireEvent.click(select);
    const elem = screen.getByTestId('20');
    expect(elem).toBeTruthy();
    expect(elem.className).toContain('state-true');
    expect(elem.textContent).toBe('twenty');
  });
});
