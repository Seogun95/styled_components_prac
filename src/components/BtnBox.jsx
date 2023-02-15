import React from 'react';
import { CL, FS } from '../styles/Theme';
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

export default function BtnBox() {
  return (
    <>
      <h1>Button</h1>
      <BtnContainer>
        <Button
          large
          trans={true}
          border={`.1875rem solid ${CL.mint}`}
          fontSize={FS.micro}
          onClick={() => alert('버튼을 만들어보세요')}
        >
          <BtnChildren>Large Primary Button</BtnChildren>
        </Button>
        <Button middle fontSize={FS.micro}>
          Medium
        </Button>
        <Button small fontSize={FS.micro}>
          Small
        </Button>
      </BtnContainer>
      <BtnContainer>
        <Button
          large
          trans={true}
          border={`.1875rem solid ${CL.ligthPink}`}
          color={CL.darkPink}
          fontSize={FS.micro}
          onClick={() => {
            const answer = prompt('어렵나요?', '');
            console.log(answer);
          }}
        >
          <BtnChildren>
            Large Negative Button <VscBellDot />
          </BtnChildren>
        </Button>
        <Button
          middle
          bg={CL.ligthPink}
          color={CL.darkPink}
          fontSize={FS.micro}
        >
          Medium
        </Button>
        <Button small bg={CL.ligthPink} color={CL.darkPink} fontSize={FS.micro}>
          Small
        </Button>
      </BtnContainer>
    </>
  );
}
