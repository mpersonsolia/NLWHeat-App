import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 36,
    width: "100%",
  },
  message: {
    lineHeight: 20,
    marginBottom: 12,

    fontSize: 15,
    fontFamily: FONTS.REGULAR,

    color: COLORS.WHITE,
  },
  footer: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  username: {
    marginLeft: 16,

    fontSize: 15,
    fontFamily: FONTS.REGULAR,

    color: COLORS.WHITE,
  },
});
