interface SignTypes {
  value?: string | number;
  fieldValue?: string | number;
  login?: string;
  password?: string | number;
  formik: {
    touched: {
      login?: boolean | any;
      password?: boolean | any;
    };
    errors: {
      login?: string | any;
      password?: string | any;
    };
    handleChange: (e: string) => void;
    isValid: boolean;
    setFieldTouched: (name: string | any, value?: boolean, isValidate?: boolean) => void;
    handleBlur: (e: React.FocusEvent) => void;
    handleSubmit: () => string | unknown;
    values: {
      login: string;
      password: string | number;
    };
  };
  onChangeHandler: (name: string, event: React.ChangeEvent) => void;
}

interface SignLabelTypes {
  readonly signLabel: string;
}

interface InputFieldTypes {
  fieldValue: string | number;
  touched: {
    login?: boolean;
    password?: boolean;
  };
  onChangeHandler: (name: string, event: React.ChangeEvent) => void;
  handleBlur: (e: React.FocusEvent) => void;
  errors: {
    login?: string;
    password?: string;
  };
  id: string;
  label?: string;
  autoComplete?: string;
}

export { type SignTypes, type InputFieldTypes, type SignLabelTypes };