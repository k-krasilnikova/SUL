import React from 'react';

export { default as SignIn } from './SignIn/SignInContainer';
export const Help = React.lazy(() => import('./Help'));
export const CoursesList = React.lazy(() => import('./CoursesList'));
export const MyCourses = React.lazy(() => import('./MyCourses'));
export const LearningCourse = React.lazy(() => import('./LearningCourse'));
export const Profile = React.lazy(() => import('./Profile'));
export const Employees = React.lazy(() => import('./Employees'));
export const Requests = React.lazy(() => import('./Requests'));
export const Skills = React.lazy(() => import('./Skills'));
export const NotFound = React.lazy(() => import('./NotFound'));
export const DetailedCourse = React.lazy(() => import('./DetailedCourse'));
export const PassingTest = React.lazy(() => import('./PassingTest'));
export const TestResult = React.lazy(() => import('./PassingTest/TestResult'));
export const SkillsMap = React.lazy(() => import('./SkillsMap'));
export const EmployeeProfile = React.lazy(() => import('./EmployeeProfile'));
export const PendingAssessments = React.lazy(() => import('./PendingAssessments'));
