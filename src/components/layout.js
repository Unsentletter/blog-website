import React from 'react';
import Header from './header';

const Layout = props => (
  <div>
    <Header />
    <div style={{ 'padding-top': 80 }}>{props.children}</div>
  </div>
);

export default Layout;
