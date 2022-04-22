export const validationTitle = {
  minLength: 2,
  maxLength: 100,
  trim: true,
  match: /^([a-zA-Z0-9\s!?.,-:;"'])*[a-zA-z][!?.,-:;"']*/,
};

export const validationTask = {
  trim: true,
  match: /^([a-zA-Z0-9\s!?.,-:;"'])*[a-zA-z][!?.,-:;"']*/,
};
