// @flow

import * as React from 'react';


export default class SearchList extends React.Component<any> {

  componentDidMount() {
    console.log(this.props.match.params.term);
  }

  render():React.Node {
    return(
    <div>Fuck</div>
    )
  }
}