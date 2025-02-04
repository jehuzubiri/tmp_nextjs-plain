import React from 'react';
import { Header, Footer } from './components';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section>{children}</section>
      <Footer />
    </>
  );
};

export default Layout;
