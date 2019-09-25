import React from 'react';
import Header from './header';

const Layout = props => (
  <div>
    <Header />
    <div style={{ paddingTop: 50 }}>{props.children}</div>
  </div>
);

export default Layout;
