// @flow

import * as React from 'react';
//import { browserHistory } from 'react-router';

type State = {
  term: string,
  onInputChange: (event: SyntheticEvent<HTMLInputElement>) => void,
  onFormChange: (event: SyntheticEvent<HTMLInputElement>) => void
}

export default class SearchBar extends React.Component<any, State> {
  state = {
    term: '',
    onInputChange: this.onInputChange()
  }

  //this.onFormSubmit = this.onFormSubmit.bind(this)
  
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