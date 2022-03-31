enum SortOrder {
  asc = 1,
  desc = -1,
}

enum AssessmentAction {
  approve = 'approve',
  decline = 'decline',
}

enum TestStatus {
  notPassed = 'not passed',
  successful = 'successful',
  assessment = 'assessment',
}

export { SortOrder, AssessmentAction, TestStatus };
