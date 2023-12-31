export class CreateStudentCourseDto {
    readonly studentId: string;
    readonly courseId: string;
    readonly enrollmentDate?: Date;
    readonly completionDate?: Date;
    readonly grade?: string;
    readonly status?: string;
    readonly progress?: number;
    readonly attendance?: boolean;
  }
  