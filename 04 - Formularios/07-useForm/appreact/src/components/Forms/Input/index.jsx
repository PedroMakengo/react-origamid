import React from "react";

const Input = ({
  id,
  label,
  value,
  setValue,
  onChange,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {error && <p>{error} </p>}
    </>
  );
};

export default Input;
