import React, { FC, forwardRef } from 'react';
import { ButtonProps } from './types';
import { Spinner } from '../Spinner/Spinner';
import './_button.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      loading,
      minimal,
      disabled,
      size,
      intent,
      leftIcon,
      rightIcon,
      className,
      children,
      ...rest
    } = props;

    const targetProps = {
      ref,
      className: getClassesFromProps(props),
      disabled: loading || disabled,
      children: <ButtonContent {...props}>{children}</ButtonContent>,
      ...rest,
    };

    return <button {...targetProps} />;
  },
);

const ButtonContent: FC<ButtonProps> = ({
  loading,
  size,
  intent,
  leftIcon,
  rightIcon,
  children,
}) => {
  const inner = (
    <>
      {leftIcon ? <span className="button-icon--left">{leftIcon}</span> : null}
      {children}
      {rightIcon ? (
        <span className="button-icon--right">{rightIcon}</span>
      ) : null}
    </>
  );

  if (!!loading) {
    return (
      <>
        <span className="spinner--overlay">
          <Spinner intent={intent || 'default'} size={size} />
        </span>
        <span className="visibility--hidden">{inner}</span>
      </>
    );
  } else {
    return inner;
  }
};

function getClassesFromProps({
  size,
  intent,
  minimal,
  className,
}: ButtonProps): string {
  const classList = ['button'];

  if (!!size && size !== 'regular') {
    classList.push(`button-size--${size}`);
  }

  if (!!intent && intent !== 'default') {
    classList.push(`button-intent--${intent}`);
  }

  if (!!minimal) {
    classList.push('button--minimal');
  }

  if (!!className) {
    classList.push(className);
  }

  return classList.join(' ');
}
