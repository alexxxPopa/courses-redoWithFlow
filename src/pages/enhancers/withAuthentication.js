import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { AppTemplate } from '../components';

export default function (ComposedComponent) {
  class Authentication extends React.Component<any> {

    componentWillMount() {
      if (!this.props.isAuthenticated && !this.props.isLoading ) {
        this.props.history.push('/')
      }
    }
  
    componentWillReceiveProps(nextProps) {
      if(!nextProps.isAuthenticated && !nextProps.isLoading) {
        this.props.history.push('/')
      }
    }

    render() {
      if (this.props.isLoading) {
        return <AppTemplate />
      }
      return ( 
      <AppTemplate>
      <ComposedComponent { ...this.props} />
      </ AppTemplate>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { isAuthenticated: state.auth.signin.get('isAuthenticated'), 
              isLoading: state.utils.get('isLoading') }
  }

  const boundAuthentication =  connect(mapStateToProps)(Authentication);

  return withRouter(boundAuthentication);
}