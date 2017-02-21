

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserForm } from '../../components'
import { navigate } from '../../actions'
import { loadCreateUser } from '../../actions/user'
import { loadListRoles  } from '../../actions/roles'
import { getListRolesResult } from '../../reducers/selectors'

class CreateUser extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.loadListRoles()
    }
    render() {
        let {loadCreateUser, roles,navigate, dispatch ,loading} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>新建项目</h2>
                <UserForm roles={roles} navigate={navigate} dispatch={dispatch} loading={loading} loadCreateUser={loadCreateUser}/>
            </div>
        )
    }
}
CreateUser.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        roles:getListRolesResult(state),
        loading:!!state.roles.loading||!!state.user.loading

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCreateUser:bindActionCreators(loadCreateUser,dispatch),
        loadListRoles:bindActionCreators(loadListRoles,dispatch),
        dispatch,
        navigate
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(CreateUser)
