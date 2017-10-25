import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


export default function (ComposedComponent) {
  class Authentication extends React.Component<any> {
  
    componentWillReceiveProps(nextProps) {
      if(!nextProps.isAuthenticated) {
        this.props.history.push('/')
      }
    }

    render() {
      // return (this.props.isAuthenticated
      //   ? <ComposedComponent {...this.props} />
      //   : <div>Is loading ...</div>
      // )
      return <ComposedComponent { ...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    console.log(state.utils.get('isLoading'))
    return { isAuthenticated: state.auth.signin.get('isAuthenticated'), 
             isLoading: state.utils.get('isLoading') }
  }

  const boundAuthentication =  connect(mapStateToProps)(Authentication);

  return withRouter(boundAuthentication);
}