/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type ButtonGroupProps = {
  direction: 'row' | 'column';
  rightAlign?: boolean;
  gap: number | string;
  children: React.ReactNode;
  className?: string;
};

const ButtonGroup = ({
  direction,
  rightAlign,
  children,
  gap,
  className
}: ButtonGroupProps) => {
  return (
    <div
      css={[
        {
          display: 'flex',
          flexDirection: direction
        },
        gapStyle(direction, gap),
        rightAlign && rightAlignStyle
      ]}
      className={className}
    >
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem'
};

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap
    }
  });
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;

export default ButtonGroup;
