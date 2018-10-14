import { lighten, darken } from 'polished';

const DARKCONST = 0.2;
const DARKERCONST = 0.4;
const LIGHTCONST = 0.2;
const LIGHTERCONST = 0.5;

const mainColor = {
  primary: 'blue',
  secondary: '#343A40',
  success: '#28A745',
  danger: '#DC3545',
  warning: '#FFC107',
  grey: '#343A40',
  white: '#FFFFFF',
  black: '#000000',
};

const alternativeColor = {
  primaryDark: darken(DARKCONST, mainColor.primary),
  primaryLight: lighten(LIGHTCONST, mainColor.primary),

  secondaryDarker: darken(DARKERCONST, mainColor.secondary),
  secondaryDark: darken(DARKCONST, mainColor.secondary),
  secondaryLight: lighten(LIGHTCONST, mainColor.secondary),
  secondaryLighter: lighten(LIGHTERCONST, mainColor.secondary),

  successDark: darken(DARKCONST, mainColor.success),
  successLight: lighten(LIGHTCONST, mainColor.success),

  dangerDark: darken(DARKCONST, mainColor.danger),
  dangerLight: lighten(LIGHTCONST, mainColor.danger),

  warningDark: darken(DARKCONST, mainColor.warning),
  warningLight: lighten(LIGHTCONST, mainColor.warning),

  greyDark: darken(DARKCONST, mainColor.grey),
  greyLight: lighten(LIGHTCONST, mainColor.grey),
  greyLighter: lighten(LIGHTERCONST, mainColor.grey),
};

const colors = {
  ...mainColor,
  ...alternativeColor,
};

export default colors;
