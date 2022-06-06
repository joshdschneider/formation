import { FormHTMLAttributes, ReactNode } from 'react';

export type NativeFormProps = FormHTMLAttributes<HTMLFormElement>;

export type CustomFormProps = {
  className?: string;
  children?: ReactNode;
};

export type FormProps = CustomFormProps & NativeFormProps;
