import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    backgroundColor: colors.black,
    opacity: 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  lessonList: {
    marginTop: 20,
  },
  lesson: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 8,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lessonDuration: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  courseInfo: {
    paddingHorizontal: 20,
  },
});
