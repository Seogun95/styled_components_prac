import React from 'react';
import { Color, FontSize } from '../styles/Theme';
import Button from '../common/Button';
import styled from 'styled-components';
import { VscBellDot } from 'react-icons/vsc';

const BtnContainer = styled.div`
  display: flex;
`;

const BtnChildren = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

function BtnBox() {
  return (
    <>
      <h1>Button</h1>
      <BtnContainer>
        <Button
          large
          trans={true}
          border={`.1875rem solid ${Color.success}`}
          color={Color.black}
          fontSize={FontSize.micro}
          onClick={() => alert('버튼을 만들어보세요')}
        >
          <BtnChildren>Large Primary Button</BtnChildren>
        </Button>
        <Button middle color={Color.black} fontSize={FontSize.micro}>
          Medium
        </Button>
        <Button small color={Color.black} fontSize={FontSize.micro}>
          Small
        </Button>
      </BtnContainer>
      <BtnContainer>
        <Button
          large
          trans={true}
          border={`.1875rem solid ${Color.danger}`}
          color={'DarkRed'}
          fontSize={FontSize.micro}
          onClick={() => prompt('어렵나요?', '')}
        >
          <BtnChildren>
            Large Negative Button <VscBellDot />
          </BtnChildren>
        </Button>
        <Button
          middle
          bg={Color.danger}
          color={'DarkRed'}
          fontSize={FontSize.micro}
        >
          Medium
        </Button>
        <Button
          small
          bg={Color.danger}
          color={'DarkRed'}
          fontSize={FontSize.micro}
        >
          Small
        </Button>
      </BtnContainer>
    </>
  );
}

export default BtnBox;
