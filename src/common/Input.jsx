import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.25rem;
  }
`;

const MyInput = styled.input`
  border: 0.0625rem solid rgb(51, 51, 51);
  height: 2.5rem;
  width: 200px;
  outline: none;
  border-radius: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  &:focus {
    box-shadow: #000000 0px 0px 0px 1px;
  }
`;

function Input({ label, value, onChange, types }) {
  return (
    <>
      <InputWrapper>
        <p>{label}</p>
        <MyInput value={value} onChange={onChange} type={types} />
      </InputWrapper>
    </>
  );
}
export default Input;

Input.defaultProps = {
  onChange: () => {},
  label: '',
  value: '',
  types: 'text',
};
