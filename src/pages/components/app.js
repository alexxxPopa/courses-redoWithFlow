//@flow

import * as React from 'react';
import LoadingBar from 'react-redux-loading-bar'; 
import Navigation from './navigation';
import Footer from './footer';

type Props = {
  children: React.Node
}

export default ({ children }: Props) => (
  <div>
    <header>
      <LoadingBar />
      <Navigation />
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);