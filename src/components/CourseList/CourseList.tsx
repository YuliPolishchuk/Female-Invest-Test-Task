import React from "react";
import { FlatList } from "react-native";
import { Course } from "../../model/course";
import CourseCard from "../CourseCard/CourseCard";
import { styles } from "./CourseList.styles";

type CourseListProps = {
  list: Course[];
  horizontal?: boolean;
  numColumns?: number;
};

const CourseList: React.FC<CourseListProps> = ({ list, horizontal = false, numColumns = 1 }) => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <CourseCard course={item} />}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

export default CourseList;
