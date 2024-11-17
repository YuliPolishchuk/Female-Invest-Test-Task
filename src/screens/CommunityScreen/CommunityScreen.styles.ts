import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accentSecondaryPink,
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  post: {
    backgroundColor: colors.white,
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  likes: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  loading: {
    marginVertical: 20,
    alignItems: "center",
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  user: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  time: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 5,
  },
});
