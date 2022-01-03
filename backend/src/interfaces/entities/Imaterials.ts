interface IMaterial {
  _id?: string;
  content: {
    stage: string;
    content: Array<string>;
  };
  technology: Array<string>;
}

type TMaterials = Array<IMaterial>;

export { IMaterial, TMaterials };
