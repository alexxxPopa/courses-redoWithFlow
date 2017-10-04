// @flow

import * as React from 'react';
import { AppTemplate } from '../layouts';

export default class SearchList extends React.Component<any> {

  componentDidMount() {
    console.log(this.props.match.params.term);
  }

  render(): React.Node {
    return (
      <AppTemplate>
        <div>
          Fuck
      </div>
      </AppTemplate>
    )
  }
}