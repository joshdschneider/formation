import React, { MouseEvent } from 'react';
import { AbstractFileUpload } from './AbstractFileUpload';
import { Button } from '../Button/Button';
import './_file_upload.scss';

export class FileUpload extends AbstractFileUpload {
  handleClick(e: MouseEvent): void {
    e.preventDefault();
    e.currentTarget.parentElement?.click();
  }

  render() {
    const {
      value,
      width,
      disabled,
      fileUploadSize,
      intent,
      className,
      ...rest
    } = this.props;

    return (
      <div className={'file-upload-container'}>
        <label className={this.getClasses()}>
          <input
            type={'file'}
            value={value}
            disabled={disabled}
            className={'file-input--hidden'}
            {...rest}
          />
          <span className={'file-input--inner'} style={this.getWidth()}>
            {this.getFileName()}
            <Button
              intent={intent}
              disabled={disabled}
              size={fileUploadSize}
              onClick={this.handleClick}
            >
              Browse
            </Button>
          </span>
        </label>
      </div>
    );
  }
}
