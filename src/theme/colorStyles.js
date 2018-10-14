import COLOR from './colors';

const colorStyles = {
  primary: {
    color: COLOR.primary,
    backgroundColor: COLOR.primary,
    borderColor: COLOR.primary,
    '&:hover': {
      color: COLOR.primaryDark,
      borderColor: COLOR.primaryDark,
      backgroundColor: COLOR.primaryDark,
    },
    '&:active': {
      color: COLOR.primaryDarker,
      borderColor: COLOR.primaryDarker,
      backgroundColor: COLOR.primaryDarker,
    },
  },
  secondary: {
    color: COLOR.secondary,
    backgroundColor: COLOR.secondary,
    borderColor: COLOR.secondary,
    '&:hover': {
      color: COLOR.secondaryDark,
      borderColor: COLOR.secondaryDark,
      backgroundColor: COLOR.secondaryDark,
    },
    '&:active': {
      color: COLOR.secondaryDarker,
      borderColor: COLOR.secondaryDarker,
      backgroundColor: COLOR.secondaryDarker,
    },
  },
  secondaryLight: {
    color: COLOR.secondaryLight,
    backgroundColor: COLOR.secondaryLight,
    borderColor: COLOR.secondaryLight,
    '&:hover': {
      color: COLOR.secondaryLight,
      borderColor: COLOR.secondaryLight,
      backgroundColor: COLOR.secondaryLight,
    },
    '&:active': {
      color: COLOR.secondaryDark,
      borderColor: COLOR.secondaryDark,
      backgroundColor: COLOR.secondaryDark,
    },
  },
  danger: {
    color: COLOR.danger,
    backgroundColor: COLOR.danger,
    borderColor: COLOR.danger,
    '&:hover': {
      color: COLOR.dangerLight,
      borderColor: COLOR.dangerLight,
      backgroundColor: COLOR.dangerLight,
    },
    '&:active': {
      color: COLOR.dangerDark,
      borderColor: COLOR.dangerDark,
      backgroundColor: COLOR.dangerDark,
    },
  },
};

export default colorStyles;
