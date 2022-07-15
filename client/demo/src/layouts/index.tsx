import { FC } from 'react';

const Layouts: FC<any> = ({ children }) => {
  return (
    <div>
      <h1>layouts</h1>
      {children}
    </div>
  );
};

export default Layouts;
