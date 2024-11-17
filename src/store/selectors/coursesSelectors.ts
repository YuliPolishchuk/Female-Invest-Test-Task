import { createSelector } from "reselect";
import { RootState } from "../store";

// Input selector: gets all courses
const selectAllCourses = (state: RootState) => state.courses.courses;

// Memoized selector: filters courses with progress > 0
export const selectCoursesWithProgress = createSelector([selectAllCourses], (courses) =>
  courses.filter((course) => course.progress > 0)
);

// Memoized selector: filters courses with progress === 0
export const selectCoursesWithoutProgress = createSelector([selectAllCourses], (courses) =>
  courses.filter((course) => course.progress === 0)
);
