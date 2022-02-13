/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import ButtonA from './ButtonA';
import { jsx, css } from '@emotion/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ButtonA',
  component: ButtonA,
  decorators: [withKnobs]
};

export const button = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'large'], 'medium');
  const theme = select(
    'theme',
    ['primary', 'secondary', 'tertiary'],
    'primary'
  );
  const disabled = boolean('disabled', false);
  const width = text('width', '');

  return (
    <ButtonA
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action('onClick')}
    >
      {label}
    </ButtonA>
  );
};

button.story = {
  name: 'Default'
};

export const primaryButton = () => {
  return <ButtonA>PRIMARY</ButtonA>;
};

export const secondaryButton = () => {
  return <ButtonA theme="secondary">SECONDARY</ButtonA>;
};

export const tertiaryButton = () => {
  return <ButtonA theme="tertiary">TERTIARY</ButtonA>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <ButtonA disabled>
          PRIMARY
        </ButtonA>
      </div>
      <div>
        <ButtonA disabled theme="secondary">
          SECONDARY
        </ButtonA>
      </div>
      <div>
        <ButtonA disabled theme="tertiary">
          TERTIARY
        </ButtonA>
      </div>
    </div>
  );
};

export const customSized = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <ButtonA width="20rem">CUSTOM WIDTH</ButtonA>
      </div>
      <div>
        <ButtonA width="100%">FULL WIDTH</ButtonA>
      </div>
    </div>
  );
};
