export interface Content {
  stage: number;
  content: string;
  isCompleted: boolean;
}

export interface Material {
  content: Array<Content>;
  technology: Array<string>;
}

export interface ClientCourse {
  currentStage: 1;
  progress: [];
  status: 'approved';
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
