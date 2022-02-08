import { Header } from 'components';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
