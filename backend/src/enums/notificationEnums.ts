enum NotificationStatuses {
  new = 'new',
  old = 'old',
}

enum NotificationTitles {
  approved = 'Approved',
  declined = 'Declined',
  assigned = 'Assigned',
  employeePassTestSuccessfully = 'Employee pass test successfully',
  employeePassTestFailed = 'Employee failed the test',
}

enum NotificationDescription {
  approved = 'Request for course was approved.',
  declined = 'Request for course was declined.',
  assigned = 'Manager assigned new course for you.',
  employeePassTestSuccessfully = 'The employee passed the test successfully.',
  employeePassTestFailed = 'The employee failed the test.',
}

export { NotificationStatuses, NotificationTitles, NotificationDescription };
