export interface Material {
  _id: string;
  content: Array<string>;
  stage: number;
}

export interface ClientCourse {
  currentStage: 1;
  progress: [];
  status: 'approved' | 'testing';
  user: '61e806ea748c709ccdc3e82c';
  _id: '61e806ea748c709ccdc3e82f';
  course: {
    title: string;
    description: string;
    technology: Array<string>;
    requiredSkills: Array<string>;
    duration: string;
    testLink: string;
    lessons: number;
    materials: Array<Material>;
    _id: string;
  };
}
