import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import Button from '../common/Button';
import { CL } from '../styles/Theme';

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1rem;
`;

function InputBox() {
  const [inputData, setInputData] = useState({
    name: '',
    price: 0,
  });

  const titleInputHandler = (e) => {
    setInputData({ ...inputData, name: e.target.value });
  };

  const priceInputHandler = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(',', ''));

    setInputData({ ...inputData, price: removedCommaValue.toLocaleString() });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputData.name !== '' && inputData.price !== '') {
      alert(`{name: ${inputData.name}, price: ${inputData.price}}`);
      console.log(~~inputData.price.split(',').join(''));
    } else alert('이름과 가격 모두 입력해주세요.');
  };

  return (
    <>
      <h1>Input</h1>
      <InputContainer>
        <Input
          label={'이름'}
          value={inputData.name}
          onChange={titleInputHandler}
        />
        <Input
          label={'가격'}
          value={inputData.price}
          onChange={priceInputHandler}
        />
        <Button middle color={CL.black} onClick={onSubmitHandler}>
          저장
        </Button>
      </InputContainer>
    </>
  );
}

export default InputBox;
