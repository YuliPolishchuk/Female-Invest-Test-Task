import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStack";
import { styles } from "./CourseDetailScreen.styles";
import { BackButton } from "../../components";

type CourseDetailScreenProps = {
  route: RouteProp<RootStackParamList, "CourseDetail">;
  navigation: StackNavigationProp<RootStackParamList, "CourseDetail">;
};

const CourseDetailScreen: React.FC<CourseDetailScreenProps> = ({ route }) => {
  const { course, lessons } = route.params;

  const renderLesson = ({ item }: { item: any }) => (
    <View style={styles.lesson}>
      <Text style={styles.lessonTitle}>{item.name}</Text>
      <Text style={styles.lessonDuration}>Duration: {Math.floor(item.duration / 60)} minutes</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackButton />
      <Image source={{ uri: course.coverImage }} style={styles.image} />
      <View style={styles.courseInfo}>
        <Text style={styles.title}>{course.name}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <FlatList
          data={lessons}
          renderItem={renderLesson}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          style={styles.lessonList}
        />
      </View>
    </View>
  );
};

export default CourseDetailScreen;
