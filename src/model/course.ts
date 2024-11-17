export interface Lesson {
  id: string;
  name: string;
  duration: number;
}

export interface Course {
  id: string;
  coverImage: string;
  description: string;
  duration: number;
  lessons: Lesson[];
  name: string;
  progress: number;
}

export interface Post {
  id: string;
  username: string;
  content: string;
  createdAt: string;
  isLiked: boolean;
  likes: number;
}
