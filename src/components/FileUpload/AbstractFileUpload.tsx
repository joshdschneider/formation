import React, { ChangeEventHandler, CSSProperties, ReactNode, RefObject } from 'react';
import { Intent, Size } from '../common/types';

type FileUploadProps = {
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
    let val = this.props.value;
    if (!!val && val.length === 1) {
      return <span className={'filename'}>{val[0].name}</span>;
    } else if (!!val && val.length > 1) {
      return <span className={'filename'}>{`${val.length} files`}</span>;
    }

    return <span className={'placeholder'}>Choose file...</span>;
  }

  getWidth(): CSSProperties {
    if (!!this.props.width) {
      return { width: `calc(${this.props.width} - 106px)` };
    }

    return {};
  }
}

export default AbstractFileUpload;
