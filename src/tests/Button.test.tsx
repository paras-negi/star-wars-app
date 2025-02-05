/// <reference types="jest" />
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders correctly with children', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    const { getByText } = render(<Button disabled>Click Me</Button>);
    expect(getByText('Click Me')).toBeDisabled();
  });
});
