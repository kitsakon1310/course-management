// src/store/courseStore.ts
import { create } from "zustand";

export interface Course {
  id: string;
  nameTH: string;
  nameEN: string;
  credit: number;
  teacher: string;
  grade: number;
}

interface CourseState {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Course) => void;
  dropCourse: (id: string) => void;
  getGPA: () => number;
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  droppedCourses: [],
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  dropCourse: (id) =>
    set((state) => {
      const courseToDrop = state.courses.find(c => c.id === id);
      if (!courseToDrop) return state;
      return {
        courses: state.courses.filter(c => c.id !== id),
        droppedCourses: [...state.droppedCourses, courseToDrop],
      };
    }),
  getGPA: () => {
    const courses = get().courses;
    if (courses.length === 0) return 0;
    const totalCredit = courses.reduce((sum, c) => sum + c.credit, 0);
    const totalPoints = courses.reduce((sum, c) => sum + c.grade * c.credit, 0);
    return totalPoints / totalCredit;
  },
}));
