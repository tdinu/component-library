import React, { FC, ReactNode } from 'react';
interface Props {
  children: ReactNode | ReactNode[];
}
const DefaultButton: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default DefaultButton;
