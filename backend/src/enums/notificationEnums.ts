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
}

enum NotificationDescription {
  approved = 'Request for course was approved',
  declined = 'Request for course was declined',
  assigned = 'Manager assigned new course',
  employeePassTestSuccessfully = 'The employee successfully passed the test',
  employeePassTestFailed = 'The employee failed the test',
  applied = 'The employee apply the course',
}

enum NotificationType {
  manager = 'manager',
  user = 'user',
}

export { NotificationStatuses, NotificationTitles, NotificationDescription, NotificationType };
