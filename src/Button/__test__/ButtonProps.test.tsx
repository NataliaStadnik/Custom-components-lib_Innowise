import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';
import React from 'react';

describe('Test correct props for Button component', () => {
  it('it should render with correct textContext', () => {
    render(<Button>Hello World</Button>);
    const textValue = screen.getByRole('button').textContent;
    expect(textValue).toEqual('Hello World');
  });

  it('it should render with correct children as ReactElement', () => {
    render(<Button children={<p>Hello World</p>}></Button>);
    const textValue = screen.getByRole('button').innerHTML.includes('<p>Hello World</p>');
    expect(textValue).toBeTruthy();
  });

  it('it should correnct render with prop=disabled', () => {
    const pressedCallback = jest.fn();

    render(<Button disabled>Hello World</Button>);
    const disabled = screen.getByRole('button');
    expect(disabled).toBeDisabled();

    fireEvent.click(disabled);
    expect(pressedCallback).not.toHaveBeenCalled();
  });

  it('it should correnct render with href', () => {
    render(<Button href="/hello-world">Hello World</Button>);
    const link = screen.getByRole('link').hasAttribute('href');
    expect(link).toBeTruthy();
  });

  it('it should have correct id', () => {
    render(<Button id="123456">Hello World</Button>);
    const id = screen.getByRole('button').id;
    expect(id).toBeTruthy();
    expect(id.valueOf()).toEqual('123456');
  });

  it('it should have correct classes style', () => {
    render(
      <Button variant="contained" classes={'btn-red'}>
        Hello World
      </Button>,
    );
    const style = screen.getByRole('button').className;
    expect(style).toBeTruthy();
    expect(style).toContain('btn-red');
  });

  it('it should have correct props=onClick', () => {
    const pressedCallback = jest.fn();
    render(<Button onClick={() => pressedCallback('bar')}>Hello World</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(pressedCallback).toHaveBeenCalled();
  });
});
