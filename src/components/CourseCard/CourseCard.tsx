import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addBookmark, removeBookmark } from "../../store/slices/coursesSlice";
import { calculateLength } from "../../utils/time-helper";
import { Course } from "../../model/course";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RootStackParamList } from "../../navigation/RootStack";
import colors from "../../constants/colors";
import screenNames from "../../constants/screenNames";
import { styles } from "./CourseCard.styles";

type CourseCardProps = {
  course: Course;
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const isBookmarked = useSelector((state: RootState) =>
    state.courses.bookmarks.some((value) => value.id === course.id)
  );

  const handleBookmark = (id: string) => {
    if (isBookmarked) {
      dispatch(removeBookmark(id));
    } else {
      dispatch(addBookmark(course));
    }
  };

  const handlePress = () => {
    navigation.navigate(screenNames.CourseDetail, {
      course,
      lessons: course.lessons,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <TouchableOpacity onPress={() => handleBookmark(course.id)} style={styles.bookmarkButton}>
        <FontAwesome
          name={isBookmarked ? "bookmark" : "bookmark-o"}
          size={20}
          color={colors.black}
        />
      </TouchableOpacity>
      {course.progress > 0 && (
        <Text style={styles.progress}>{Math.round(course.progress * 100)}% completed</Text>
      )}
      <Image source={{ uri: course.coverImage }} style={styles.image} />
      <View style={styles.description}>
        <Text style={styles.title}>{course.name}</Text>
        <View style={styles.wrap}>
          <Text style={styles.text}>{course.lessons?.length} lessons</Text>
          <View style={[styles.wrap, styles.duration]}>
            <FontAwesome name="clock-o" size={11} color={colors.black} />
            <Text style={[styles.text, styles.durationText]}>
              {calculateLength(course.duration)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
