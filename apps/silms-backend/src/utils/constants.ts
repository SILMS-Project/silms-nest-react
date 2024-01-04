export enum Role {
  Applicant = 'applicant',
  Student = 'student',
  Lecturer = 'lecturer',
}

export enum AssessmentType {
  LECTURE = 'Lecture',
  ASSIGNMENT = 'Assignment',
  ASSESSMENT = 'Assessment',
}

export enum CourseType {
  COMPULSORY = 'compulsory',
  ELECTIVE = 'elective',
}

export enum ApplicationStatus {
  PENDING = 'Pending',
  ACCEPTED = 'Accepted',
  REJECTED = 'Rejected',
  UNDER_REVIEW = 'Under Review',
}

export enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export enum SubmissionStatus {
  PENDING = 'pending',
  SUBMITTED = 'submitted',
  LATE = 'late',
}

export enum Grades {
  A = 5,
  B = 5,
  C = 3,
  D = 1,
  F = 0
}