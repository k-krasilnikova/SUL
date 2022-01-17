export interface SignTypes {
  isFieldTouched: boolean;
  value?: string | number;
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
}
