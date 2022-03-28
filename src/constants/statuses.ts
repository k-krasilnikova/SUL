export const COURSE_STATUSES = {
  pending: 'pending',
  approved: 'approved',
  started: 'started',
  testing: 'testing',
  rejected: 'rejected',
  completed: 'completed',
  successful: 'successful',
  assessment: 'assessment',
  failed: 'failed',
};

export const COURSE_LABELS: { [key: string]: string } = {
  pending: 'Pending',
  approved: 'Start the course',
  started: 'Continue',
  successful: 'Completed',
  testing: 'Continue the test',
  rejected: 'Declined',
  completed: 'Completed',
};

export const NOTIFICATION_STATUSES = {
  new: 'new',
  old: 'old',
};
