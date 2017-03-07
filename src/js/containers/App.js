import React, { findDOMNode, Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { message, Spin} from 'antd';
import {Header,Nav,BreadNav} from '../components'
import { connect } from 'react-redux';
import { navigate, updateRouterState } from '../actions'
import { default as actionsCreate  } from '../actions/user'


class App extends Component {
    constructor(props) {
        super(props)
        this.messageTip = this.messageTip.bind(this)
    }
    //hash
    componentWillMount() {
        this.props.updateRouterState({
            pathname: this.props.location.pathname,
            params  : this.props.params
        })
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.location.pathname !== nextProps.location.pathname)
            this.props.updateRouterState({
            pathname: nextProps.location.pathname,
            params  : nextProps.params
        })
    }
    messageTip(messageType,msg){
        switch (messageType) {
            case 'success':
                message.success(msg);
                break;
            case 'warning':
                message.warning(msg);
                break;
            case 'info':
                message.info(msg);
                break;
            case 'loading':
                const hide = message.loading(msg, 0);
                setTimeout(hide, 2500);
                break;
            case 'error':
                message.error(msg);
                break;
            default:
                message.error(msg);
                return ''
        }
    }

    render() {
        var {children,inputValue,actions,login,dispatch,route, params, routes, paths} = this.props
        var navStatus = {route, params, routes, paths}
        var {messageType,msg} = this.props.messageTip
        // this.messageTip(messageType,msg)
        let container = (

            <div>
                <Header login={login} actions={actions}/>
                <main className='main'>
                <Nav login={login} />
                <div className='content'>
                <BreadNav navStatus={navStatus}/>
                {children}
                </div>
                </main>
            </div>
        )

        return(
            container
        )
    }
}
App.propTypes = {
  messageTip: PropTypes.object,
  children: PropTypes.node
}

const mapStateToProps = (state,ownsProps) => {
    return {
        login:state.user.login,
        messageTip: state.messageTip
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        updateRouterState,
        navigate,
        actions: bindActionCreators(actionsCreate, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


