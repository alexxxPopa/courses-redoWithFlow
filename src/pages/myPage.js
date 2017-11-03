import * as React from 'react';
import { connect } from 'react-redux';

const myPage = (props) => (
  <div> Welcome, { props.email } </div>
)

const mapStateToProps = (state) => {
  return {email: state.auth.signin.get('email')}
}

export default connect(mapStateToProps)(myPage);