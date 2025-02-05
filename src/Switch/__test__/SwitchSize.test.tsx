import { render, screen } from '@testing-library/react';
import Switch from '../Switch';
import React from 'react';

describe('Test correct props=size for Switch', () => {
  it('it should correct render with size=small', () => {
    render(<Switch size="small" />);
    const track = screen.getByTestId('track');
    expect(track.className).toContain('track-small');

    const thumb = screen.getByTestId('thumb');
    expect(thumb.className).toContain('thumb-small');
  });

  it('it should correct render with size=medium', () => {
    render(<Switch size="medium" />);
    const track = screen.getByTestId('track');
    expect(track.className).toContain('track-medium');

    const thumb = screen.getByTestId('thumb');
    expect(thumb.className).toContain('thumb-medium');
  });
});
