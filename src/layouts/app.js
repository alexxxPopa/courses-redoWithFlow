//@flow

import * as React from 'react';

import Navigation from './navigation';
import Footer from './footer';


type Props = {
  children: React.Node
}

export default ({ children }: Props) => (
  <div>
    <header>
      <Navigation />
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);