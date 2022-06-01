import React, { forwardRef } from 'react';
import { ButtonContent } from './ButtonContent';
import { getButtonClasses } from './getButtonClasses';
import { AnchorProps, ButtonProps, NativeAnchorProps, NativeButtonProps } from './types';
import "./_button.scss";

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps | AnchorProps>(
  (props, ref) => {
    const { className, leftIcon, rightIcon, intent, size, loading, minimal, disabled, children, ...otherNativeProps } = props;

    const targetProps = {
      ref,
      className: getButtonClasses(props),
      disabled: disabled || loading,
      children: <ButtonContent {...props}>{children}</ButtonContent>,
      ...otherNativeProps
    };
    
    if ("href" in props) {
      return (
        <a {...targetProps as NativeAnchorProps} />
      );
    } else {
      return (
        <button {...targetProps as NativeButtonProps} />
      )
    }
  }
);
