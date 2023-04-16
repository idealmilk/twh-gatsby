import React from "react";

import { InputContainer } from "./styled";

type Props = {
  type: string;
  name: string;
  required?: boolean;
  value: string;
  placeholder: string;
  isColumn?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color: string;
};

const FormInput = ({
  type,
  name,
  required,
  value,
  placeholder,
  handleChange,

  color,
}: Props) => {
  return (
    <InputContainer color={color}>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputContainer>
  );
};

export default FormInput;
