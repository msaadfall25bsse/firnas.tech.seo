import { BootcampCourse } from "@/data/bootcampCourses";
import { course1 } from "./course1";
import { course2 } from "./course2";
import { course3 } from "./course3";
import { course4 } from "./course4";
import { course5 } from "./course5";
import { course6 } from "./course6";
import { course7 } from "./course7";
import { course8 } from "./course8";
import { course9 } from "./course9";

export * from "@/data/bootcampCourses";

export const allBootcampCourses: BootcampCourse[] = [
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
  course7,
  course8,
  course9,
];

export function getBootcampCourseBySlug(slug: string): BootcampCourse | undefined {
  return allBootcampCourses.find((c) => c.slug === slug);
}
