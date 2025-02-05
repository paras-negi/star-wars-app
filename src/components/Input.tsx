import React from 'react';

interface InputProps {
  inputType: string,
  inputName?: string,
  placeholder?: string;
  value?: string | number;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({inputType, className, inputName, placeholder, value, onChange }) => {
  return (
    <input
      type={inputType}
      name={inputName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;