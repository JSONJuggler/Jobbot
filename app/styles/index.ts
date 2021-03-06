import {StyleSheet} from 'react-native';

export const COLOR_BLACK = '#000000';
export const COLOR_GRAY_DARKEST = '#1E2125';
export const COLOR_GRAY_DARKER = '#444950';
export const COLOR_GRAY = '#ebebeb';
export const COLOR_WHITE = '#FFFFFF';
export const COLOR_GREEN_DARK = '#51C65C';
export const COLOR_GREEN = '#29D54A';
export const COLOR_GREEN_LIGHT = '#A9FDAB';
export const COLOR_GREEN_LIGHTEST = '#FCFCFC';
export const COLOR_ORANGE = '#FDAA54';
export const COLOR_ORANGE_LIGHTER = '#FDC58E';
export const COLOR_ORANGE_LIGHTEST = '#FEE2C6';

export const COLORS = {
  lighterMain: COLOR_GREEN_DARK,
  main: COLOR_GRAY,
  secondary: COLOR_GREEN,
  homeBar: COLOR_GREEN,
  homeBackground: COLOR_GREEN_LIGHT,
  profileBar: COLOR_ORANGE,
  profileBackground: COLOR_ORANGE_LIGHTEST,
  settingsBar: COLOR_GRAY,
  settingsBackground: COLOR_GRAY,
  black: COLOR_BLACK,
  white: COLOR_WHITE,
  text: COLOR_BLACK,
  caption: COLOR_GRAY_DARKER,
};

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  text: {
    color: COLORS.text,
  },
  buttonText: {
    color: COLORS.white,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
});
