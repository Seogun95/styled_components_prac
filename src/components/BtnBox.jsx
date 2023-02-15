import React from 'react';
import { Color } from '../styles/Theme';
import Button from '../common/Button';

function BtnBox() {
  return (
    <>
      <Button small color={Color.black} fontSize={'2rem'}>
        안녕
      </Button>
    </>
  );
}

export default BtnBox;
