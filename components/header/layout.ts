// @flow

import React from 'react';

interface Props {
  title: string,
  children: any
}

export default ({title, children}: Props ) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      { children }

      <footer>
        Fuck your footer!!!
      </footer>
    </div>
  );
}