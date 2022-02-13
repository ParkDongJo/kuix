import React from 'react';
import ButtonGroup from './ButtonGroup';
import ButtonA from '../components/ButtonA';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs]
};

export const buttonGroup = () => {
  const direction = radios(
    'direction',
    { Row: 'row', Column: 'column' },
    'row'
  );
  const rightAlign = boolean('rightAlign', false);
  const gap = text('gap', '0.5rem');

  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gap={gap}>
      <ButtonA theme="tertiary">취소</ButtonA>
      <ButtonA>확인</ButtonA>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default'
};

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <ButtonA theme="tertiary">취소</ButtonA>
      <ButtonA>확인</ButtonA>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <ButtonA>CLICK ME</ButtonA>
      <ButtonA>CLICK ME</ButtonA>
    </ButtonGroup>
  );
};

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <ButtonA theme="tertiary">취소</ButtonA>
      <ButtonA>확인</ButtonA>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <ButtonA>CLICK ME</ButtonA>
      <ButtonA>CLICK ME</ButtonA>
    </ButtonGroup>
  );
};
