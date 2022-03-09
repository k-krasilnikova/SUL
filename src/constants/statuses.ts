export const COURSE_STATUSES = {
  pending: 'pending',
  approved: 'approved',
  started: 'started',
  testing: 'testing',
  rejected: 'rejected',
  completed: 'completed',
  successful: 'successful',
};

export const COURSE_LABELS: { [key: string]: string } = {
  pending: 'Pending',
  approved: 'Start the course',
  started: 'Continue',
  successful: 'Completed',
  testing: 'Continue test',
  rejected: 'Declined',
  completed: 'Completed',
};

export const NOTIFICATION_STATUSES = {
  new: 'new',
  old: 'old',
};
