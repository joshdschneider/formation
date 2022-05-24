import { CSSProperties, FormEventHandler, ReactNode, RefObject } from 'react';

export type FormProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  acceptCharset?: string;
  action?: string;
  autoComplete?: string;
  encType?: string;
  method?: string;
  name?: string;
  noValidate?: boolean;
  target?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  ref?: RefObject<HTMLFormElement>;
  children?: ReactNode;
};
