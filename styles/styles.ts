import { StyleSheet } from "react-native";

export const COLOR_BLACK = "#000000";
export const COLOR_GRAY = "#ebebeb";
export const COLOR_WHITE = "#FFFFFF";
export const COLOR_GREEN_DARK = "#51C65C";
export const COLOR_GREEN_MEDIUM = "#188F00";
export const COLOR_GREEN_LIGHT = "#A9FDAB";
export const COLOR_GREEN_LIGHTEST = "#FCFCFC";

export const COLORS = {
  main: COLOR_GREEN_DARK,
  white: COLOR_WHITE,
};

export default StyleSheet.create({
  button: {
    alignSelf: "center",
    alignItems: "center",
    width: "60%",
    margin: 10,
    padding: 10
  },
});
