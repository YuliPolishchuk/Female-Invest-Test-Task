import React, { ReactElement, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchBookmarks } from "../../store/slices/coursesSlice";
import { CourseList } from "../../components";
import { styles } from "./MyCoursesScreen.styles";

const MyCourseScreen = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const bookmarks = useSelector((state: RootState) => state.courses.bookmarks);

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My courses</Text>
      {bookmarks.length > 0 ? (
        <CourseList list={bookmarks} numColumns={2} />
      ) : (
        <Text style={styles.text}>
          You haven't bookmarked any courses yet. Go to the home screen to
          bookmark a course.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default MyCourseScreen;
