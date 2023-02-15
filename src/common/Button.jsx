import React from 'react';
import styled, { css } from 'styled-components';

export default function Button({ children, ...props }) {
  return (
    <ButtonWrapper isType={props.isType} onClick={props.onClick} {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  borderRadius: '1.5rem',
  margin: '.2rem',
  padding: '.5rem',
  fontSize: '1rem',
  fontWeight: '600',
  color: 'white',
  bg: '#32f9c0',
  border: 'none',
  weight: 'middle',

  onClick: () => {},
};

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  background-color: ${(props) =>
    props.trans === true ? 'transparent' : props.bg};
  border: ${(props) => props.border};

  ${(props) =>
    props.small &&
    css`
      width: 10rem;
      height: 4rem;
    `}
  ${(props) =>
    props.middle &&
    css`
      width: 13rem;
      height: 4.5rem;
    `}
  ${(props) =>
    props.large &&
    css`
      width: 20rem;
      height: 5rem;
    `}
    &:active {
    filter: brightness(75%);
  }
`;
