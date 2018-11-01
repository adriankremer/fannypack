// @flow
import styled, { css } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { tint } from 'polished';
import Label from 'reakit/Label';

import { Box } from '../primitives';
import HiddenInput from '../_utils/HiddenInput';

export const RadioIcon = styled(Box)`
  border: 1px solid #bdbdbd;
  box-shadow: inset 0px 1px 2px #e5e5e5;
  border-radius: 100%;
  height: 1em;
  position: relative;
  width: 1em;

  & {
    ${props =>
      props.state &&
      css`
        border-color: ${props => tint(0.3, palette(props.state)(props))};
        box-shadow: ${props => tint(0.3, palette(props.state)(props))} 0px 0px 0px 1px !important;
      `};
  }

  & {
    ${theme('fannypack.Radio.icon.base')};
  }
`;

export const HiddenRadio = HiddenInput({
  Icon: RadioIcon,
  tickCss: css`
    background: #586ccf;
    border-radius: 50%;
    content: '';
    height: 8px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
  `,
  disabledTickCss: css`
    background: ${palette('grayLighter')};
  `,
  themePrefix: 'Radio'
});

export const Radio = styled(Label)`
  display: flex;
  align-items: center;

  ${theme('fannypack.Radio.base')};
`;

const horizontalProperties = css`
  display: flex;

  & ${Radio}:not(:last-child) {
    margin-right: 1rem;
    margin-bottom: unset;
  }

  & {
    ${theme('fannypack.RadioGroup.horizontal')};
  }
`;

export const RadioGroup = styled(Box)`
  & ${Radio}:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  & {
    ${props => props.isHorizontal && horizontalProperties};
  }

  ${theme('fannypack.RadioGroup.base')};
`;

export default Radio;
