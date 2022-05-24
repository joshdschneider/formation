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
    return (
      <div className={'file-upload-container'}>
        <label className={this.getClasses()}>
          <input
            type={'file'}
            id={this.props.id}
            name={this.props.name}
            disabled={this.props.disabled}
            accept={this.props.accept}
            multiple={this.props.multiple}
            required={this.props.required}
            className={'file-input--hidden'}
            style={this.props.style}
            onChange={this.props.onChage}
            ref={this.props.ref}
          />
          <span className={'file-input--inner'} style={this.getWidth()}>
            {this.getFileName()}
            <Button
              intent={this.props.intent}
              disabled={this.props.disabled}
              size={this.props.size}
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
