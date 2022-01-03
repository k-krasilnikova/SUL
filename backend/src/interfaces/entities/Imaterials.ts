interface IMaterial {
  _id?: string;
  content: {
    stage: string;
    content: Array<string>;
    isCompleted: boolean;
  };
  technology: Array<string>;
}

type TMaterials = Array<IMaterial>;

export { IMaterial, TMaterials };
