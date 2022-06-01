import { ButtonProps, CustomButtonProps } from "./types";

export const getButtonClasses = (props: CustomButtonProps): string => {
  const classList = ['button'];

  if (!!props.size && props.size !== 'regular') {
    classList.push(`button-size--${props.size}`);
  }

  if (!!props.intent && props.intent !== 'default') {
    classList.push(`button-intent--${props.intent}`);
  }

  if (!!props.minimal) {
    classList.push('button--minimal');
  }

  if (!!props.className) {
    classList.push(props.className);
  }

  return classList.join(" ");
}