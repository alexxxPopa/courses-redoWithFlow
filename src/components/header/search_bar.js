// @flow

import * as React from 'react';
import { withRouter } from 'react-router';

type State = {
  term: string
}

class SearchBar extends React.Component<any, State> {

  state = { term: ''};

  onInputChange(event :SyntheticEvent<HTMLInputElement>): void {
    this.setState( {term: event.currentTarget.value });
  }
  
  onFormSubmit(event:SyntheticEvent<HTMLElement>): void{
    event.preventDefault();
    this.props.history.push(`/search/${this.state.term}`)
    this.setState({ term: ''});
  }

  render() :React.Node {
    return(
      <form onSubmit={ (event) => this.onFormSubmit(event)}>
        <input
          placeholder="Search for course"
          value={ this.state.term }
          onChange={ (event) => this.onInputChange(event) } />
        <span>
            <button
              type="submit">
              Search
            </button>
        </span>
      </form>
    );
  }  
}

export default withRouter(SearchBar);