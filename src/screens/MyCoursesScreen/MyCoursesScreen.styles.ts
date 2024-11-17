import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  flatListContent: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  text: {
    paddingHorizontal: 16,
    color: colors.textSecondary,
  },
});
