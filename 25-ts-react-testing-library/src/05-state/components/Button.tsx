import React, { ReactElement } from 'react';

type ButtonProps = {
  text: string;
};
const Button: React.FC<ButtonProps> = (props: ButtonProps): ReactElement => {
  return <button>{props.text}</button>;
};

export default Button;
