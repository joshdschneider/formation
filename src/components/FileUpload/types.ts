import { ChangeEventHandler, CSSProperties, RefObject } from 'react';
import { Intent, Size } from '../common/types';

export type FileUploadProps = {
  id?: string;
  name?: string;
  value?: FileList;
  disabled?: boolean;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  width?: string;
  size?: Size;
  intent?: Intent;
  className?: string;
  style?: CSSProperties;
  onChage?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
};
