interface ILocals {
  id: string;
  courseId: string | undefined;
  clientCourseId: string | undefined;
  userId: string | undefined;
  managerId: string | undefined;
  results: Record<string, never>;
}

type TLocalsManager = ILocals;
type TLocalsUser = Omit<ILocals, 'managerId'>;

export { TLocalsManager, TLocalsUser };
