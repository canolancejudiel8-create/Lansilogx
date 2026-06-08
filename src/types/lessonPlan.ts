export interface LessonPlan {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  basicInfo?: {
    lessonTitle: string;
    learningArea: string;
    gradeLevel: string;
    section: string;
    teacherName: string;
    numberOfSessions: number;
    schoolName: string;
    quarter: string;
    week: number;
  };
  curriculumInfo?: {
    learningCompetency: string;
    contentStandard: string;
    performanceStandard: string;
    melc: string;
  };
  objectives?: {
    cognitive: string;
    psychomotor: string;
    affective: string;
  };
  learnerContext?: string;
  learningExperience?: {
    preLesson: string;
    flow: string;
    resources: string;
  };
  assessment?: string;
  integration?: string;
  extendedLearning?: string;
  reflection?: string;
}
