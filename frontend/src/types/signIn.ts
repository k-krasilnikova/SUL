export interface SignTypes {
  warningHandler: (name: string, event: string) => void;
  getFieldName: (event: React.MouseEvent<Element, MouseEvent>) => void;
  getCoordinates?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  value?: string | number;
  isAuthError: boolean;
  fieldValue?: string | number;
  login?: string;
  password?: string | number;
  formik: {
    touched: {
      login?: boolean;
      password?: boolean;
    };
    errors: {
      login?: string;
      password?: string;
      isAuthFailed?: string;
    };
    handleChange: (e: string) => void;
    isValid: boolean;
    setFieldTouched: (name: string, value?: boolean, isValidate?: boolean) => void;
    handleBlur: (e: React.FocusEvent) => void;
    handleSubmit: () => string | unknown;
    values: {
      login: string;
      password: string | number;
    };
  };
  imageUrl?: string;
  isLoading?: boolean;
  handleFocus?: (e: React.FocusEvent) => void;
  labelState?: string;
  status?: string;
  fieldStatus?: string | boolean;
  classes?: {
    [key: string]: string | undefined;
  };
  outOfFocusFiled: (event: string) => void;
}

export interface IErrorFieldTypes {
  identificator?: string;
}

export interface ITextFieldTypes {
  errors: {
    login?: string;
    password?: string;
  };
  touched: Record<string, boolean | undefined>;
}

export interface SignInFields {
  login: string;
  password: string;
}

export interface ISignInForm {
  formik: {
    touched: {
      login?: boolean;
      password?: boolean;
    };
    errors: {
      login?: string;
      password?: string;
      isAuthFailed?: string;
    };
    handleChange: (e: string) => void;
    isValid: boolean;
    setFieldTouched: (name: string, value?: boolean, isValidate?: boolean) => void;
    handleBlur: (e: React.FocusEvent) => void;
    handleSubmit: () => string | unknown;
    values: {
      login: string;
      password: string | number;
    };
  };
  warningHandler: (name: string, event: string) => void;
  outOfFocusFiled: (e: string) => void;
  getFieldName: (event: React.MouseEvent<Element, MouseEvent>) => void;
  isAuthError: boolean;
  isLoading?: boolean;
  fieldStatus?: string | boolean;
}
