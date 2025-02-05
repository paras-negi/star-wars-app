import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../components/Input';

describe('Input Component', () => {
  it('renders correctly with placeholder', () => {
    const { getByPlaceholderText } = render(<Input inputType="text" placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(<Input inputType="text" onChange={handleChange} placeholder="Enter text" />);
    fireEvent.change(getByPlaceholderText('Enter text'), { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders with the correct value', () => {
    const { getByDisplayValue } = render(<Input inputType="text" value="Test Value" />);
    expect(getByDisplayValue('Test Value')).toBeInTheDocument();
  });
});
