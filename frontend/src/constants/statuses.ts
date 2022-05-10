export const COURSE_LABELS = {
  pending: 'Pending',
  approved: 'Start the course',
  started: 'Continue',
  successful: 'Completed',
  testing: 'Continue the test',
  rejected: 'Declined',
  completed: 'Completed',
  assessment: 'Assessment',
  failed: 'Continue',
} as const;

export const NOTIFICATION_STATUSES = {
  new: 'new',
  old: 'old',
};

export const NOTIFICATION_TYPES = {
  manager: 'manager',
  employee: 'employee',
};
