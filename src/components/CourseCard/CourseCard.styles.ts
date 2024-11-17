import { StyleSheet } from "react-native";
import { colors, constants } from "../../constants";

export const styles = StyleSheet.create({
  card: {
    marginRight: 15,
    borderRadius: 8,
    shadowRadius: 5,
    borderWidth: 1,
    overflow: "hidden",
    paddingBottom: 5,
    width: (constants.deviceWidth - 35) / 2,
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    fontSize: 14,
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
    borderTopWidth: 1,
    paddingHorizontal: 10,
  },
  progress: {
    fontSize: 10,
    color: colors.black,
    borderWidth: 1,
    fontWeight: 500,
    backgroundColor: colors.accentPrimaryGreen,
    position: "absolute",
    top: 5,
    left: 5,
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    zIndex: 2,
  },
  bookmarkButton: {
    position: "absolute",
    zIndex: 2,
    top: 5,
    width: 40,
    height: 40,
    alignItems: "flex-end",
    right: 5,
  },
  text: {
    fontSize: 11,
    color: colors.textPrimary,
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  duration: {
    marginLeft: 10,
  },
  durationText: {
    marginLeft: 3,
  },
});
