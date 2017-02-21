
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {LoginForm} from '../../components'
import { default as actionsCreate  } from '../../actions/user'

class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {actions} = this.props
        return(
            <LoginForm actions={actions}/>
        )
    }
}

Login.propTypes = {
}
function mapStateToProps(state,ownsProps) {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionsCreate, dispatch)

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

