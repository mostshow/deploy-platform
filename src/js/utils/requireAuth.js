import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { messageWarning } from '../actions';
import { message} from 'antd';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    constructor(props, context) {
        super(props, context)
    }
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        message.warning('需要登录!!')
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    messageWarning: PropTypes.func.isRequired
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.user.login.isAuthenticated
    };
  }

  return connect(mapStateToProps, { messageWarning })(Authenticate);
}
