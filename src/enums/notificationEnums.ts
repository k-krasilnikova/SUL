enum NotificationStatuses {
  new = 'new',
  old = 'old',
}

enum NotificationTitles {
  approved = 'approved',
  declined = 'declined',
  assigned = 'assigned',
  employeePassTestSuccessfully = 'employeePassTestSuccessfully',
  employeePassTestFailed = 'employeePassTestFailed',
}

enum NotificationDescription {
  approved = 'Request for course was approved.',
  declined = 'Request for course was declined.',
  assigned = 'Manager assigned new course for you.',
  employeePassTestSuccessfully = 'The employee passed the test successfully.',
  employeePassTestFailed = 'The employee failed the test.',
}

export { NotificationStatuses, NotificationTitles, NotificationDescription };
