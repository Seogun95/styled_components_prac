import React from 'react';
import styled, { css } from 'styled-components';
import { CL } from '../styles/Theme';

export default function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

Button.defaultProps = {
  borderRadius: '.5rem',
  margin: '.2rem',
  padding: '.5rem',
  fontSize: '1rem',
  fontWeight: '400',
  color: 'black',
  bg: CL.mint,
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
      width: 6.25rem;
      height: 2.5rem;
    `}
  ${(props) =>
    props.middle &&
    css`
      width: 8.125rem;
      height: 2.8125rem;
    `}
  ${(props) =>
    props.large &&
    css`
      width: 12.5rem;
      height: 3.125rem;
    `}
    & {
    cursor: pointer;
    transition: 0.2s ease;
  }
  &:active,
  &:hover,
  &:active {
    filter: brightness(97%);
  }
`;
