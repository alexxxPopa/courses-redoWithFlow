import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


export default function (ComposedComponent) {
  class Authentication extends React.Component<any> {
  
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => (
    { isAuthenticated: state.session.isAuthenticated }
  )

  const boundAuthentication =  connect(mapStateToProps)(Authentication);

  return withRouter(boundAuthentication);
}