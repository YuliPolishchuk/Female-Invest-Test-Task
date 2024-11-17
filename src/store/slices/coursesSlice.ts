import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../services/api";
import { Course } from "../../model/course";

// Define the shape of the state managed by this slice
interface CoursesState {
  courses: Course[];
  bookmarks: Course[];
  loading: boolean;
  error: string | null;
}

// Initial state for the slice
const initialState: CoursesState = {
  courses: [],
  bookmarks: [],
  loading: false,
  error: null,
};

// Async thunk to fetch courses from the API
export const fetchCourses = createAsyncThunk<Course[], void, { rejectValue: string }>(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/courses");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch courses");
    }
  }
);

// Async thunk to fetch bookmarks from the API
export const fetchBookmarks = createAsyncThunk<Course[], void, { rejectValue: string }>(
  "courses/fetchBookmarks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/bookmarks");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch bookmarks");
    }
  }
);

// Create the slice
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }: PayloadAction<Course[]>) => {
      state.courses = payload;
      state.error = null;
    },
    addBookmark: (state, { payload }: PayloadAction<Course>) => {
      if (!state.bookmarks.some((bookmark) => bookmark.id === payload.id)) {
        state.bookmarks.push(payload);
      }
    },
    removeBookmark: (state, { payload }: PayloadAction<string>) => {
      state.bookmarks = state.bookmarks.filter((bookmark) => bookmark.id !== payload);
    },
    clearCourses: (state) => {
      state.courses = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchCourses
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, { payload }) => {
        state.courses = payload;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, { payload }) => {
        state.error = payload || "Something went wrong";
        state.loading = false;
      })
      // Handle fetchBookmarks
      .addCase(fetchBookmarks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookmarks.fulfilled, (state, { payload }) => {
        state.bookmarks = payload;
        state.loading = false;
      })
      .addCase(fetchBookmarks.rejected, (state, { payload }) => {
        state.error = payload || "Something went wrong";
        state.loading = false;
      });
  },
});

// Export actions for use in components or other parts of the app
export const { setCourses, addBookmark, removeBookmark, clearCourses } = coursesSlice.actions;

// Export the reducer for store configuration
export default coursesSlice.reducer;
