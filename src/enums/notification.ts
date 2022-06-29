enum NotificationStatuses {
  new = 'new',
  old = 'old',
}

enum NotificationTitles {
  approved = 'Approved',
  declined = 'Declined',
  assigned = 'Assigned',
  employeePassTestSuccessfully = 'Successfully',
  employeePassTestFailed = 'Failed',
  applied = 'Apply',
  approvedWithInterview = 'Approved with interview',
  assignedWithInterview = 'Assigned with interview',
}

enum NotificationDescription {
  approved = 'Request for course was approved',
  declined = 'Request for course was declined',
  assigned = 'Manager assigned new course',
  employeePassTestSuccessfully = 'The employee successfully passed the test',
  employeePassTestFailed = 'The employee failed the test',
  applied = 'The employee applied the course',
  approvedWithInterview = 'Request for course was approved with interview',
  assignedWithInterview = 'Course was assigned with interview',
}

enum NotificationType {
  manager = 'manager',
  employee = 'employee',
}

export { NotificationStatuses, NotificationTitles, NotificationDescription, NotificationType };
