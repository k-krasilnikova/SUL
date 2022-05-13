import { lazy } from 'react';

export const Help = lazy(() => import('./Help'));
export const SignIn = lazy(() => import('./SignIn'));
export const CoursesList = lazy(() => import('./CoursesList'));
export const MyCourses = lazy(() => import('./MyCourses'));
export const LearningCourse = lazy(() => import('./LearningCourse'));
export const Profile = lazy(() => import('./Profile'));
export const Employees = lazy(() => import('./Employees'));
export const Requests = lazy(() => import('./Requests'));
export const Skills = lazy(() => import('./Skills'));
export const NotFound = lazy(() => import('./NotFound'));
export const DetailedCourse = lazy(() => import('./DetailedCourse'));
export const PassingTest = lazy(() => import('./PassingTest'));
export const TestResult = lazy(() => import('./PassingTest/TestResult'));
export const SkillsMap = lazy(() => import('./SkillsMap'));
export const EmployeeProfile = lazy(() => import('./EmployeeProfile'));
export const PendingAssessments = lazy(() => import('./PendingAssessments'));
