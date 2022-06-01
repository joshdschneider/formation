import React, { FC } from "react";
import { Spinner } from "../Spinner";
import { CustomButtonProps } from "./types";

export const ButtonContent: FC<CustomButtonProps> = ({
  leftIcon, rightIcon, intent, children, loading, size
}) => {
    const iconizedChildren = (
      <>
        {leftIcon ? (
          <span className='button-icon--left'>{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon ? (
          <span className='button-icon--right'>{rightIcon}</span>
        ) : null}
      </>
    );

    if (!!loading) {
      return (
        <>
          <span className='spinner--overlay'>
            <Spinner intent={intent || 'default'} size={size} />
          </span>
          <span className='visibility--hidden'>{iconizedChildren}</span>
        </>
      );
    } else {
      return iconizedChildren;
    }
  };
