import React, { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { Intent, Size } from '../common/types';

type FileUploadProps = {
  id?: string;
  name?: string;
  value?: File;
  disabled?: boolean;
  autofocus?: boolean;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  size?: Size;
  intent?: Intent;
  minimal?: boolean;
  className?: string;
  style?: CSSProperties;
  onChage?: ChangeEventHandler<HTMLInputElement>;
  ref?: RefObject<HTMLInputElement>;
};

abstract class AbstractFileUpload extends React.Component<FileUploadProps> {
  getClasses(): string {
    let classList = `file-upload`;

    if (!!this.props.size && this.props.size !== 'regular') {
      classList += ` file-upload-size--${this.props.size}`;
    }

    if (!!this.props.className) {
      classList += ` ${this.props.className}`;
    }

    return classList;
  }

  getFileName(): ReactNode {
    if (!!this.props.value) {
      return <span className={'filename'}>{this.props.value.name}</span>;
    }

    return <span className={'placeholder'}>Choose file...</span>;
  }
}

export default AbstractFileUpload;
