import React, { ReactElement, useEffect } from "react";
import { View, SafeAreaView, ActivityIndicator, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCourses } from "../../store/slices/coursesSlice";
import {
  selectCoursesWithProgress,
  selectCoursesWithoutProgress,
} from "../../store/selectors/coursesSelectors";
import { CourseList } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./HomeScreen.styles";

const HomePage = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.courses);
  const coursesWithProgress = useSelector(selectCoursesWithProgress);
  const coursesWithoutProgress = useSelector(selectCoursesWithoutProgress);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="small" color={colors.accentPrimaryPink} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Continue learning</Text>
        <CourseList list={coursesWithProgress} horizontal />
      </View>
      <View>
        <Text style={styles.title}>You might also like</Text>
        <CourseList list={coursesWithoutProgress} horizontal />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
