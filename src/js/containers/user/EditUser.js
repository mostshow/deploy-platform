
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {UserForm} from '../../components'
import {loadEditUser} from '../../actions/user'
import { navigate } from '../../actions'
import { loadListRoles  } from '../../actions/roles'
import { getListRolesResult } from '../../reducers/selectors'

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit:true
        }
    }
    componentWillMount() {
        this.props.loadListRoles()
    }
    render() {
        let {loadEditUser, toEditData, roles,navigate, dispatch, loading} = this.props
        let {isEdit} = this.state;
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>编辑项目</h2>
                <UserForm toEditData={toEditData}  navigate={navigate} dispatch={dispatch}  roles={roles} loading={loading} isEdit={isEdit} loadEditUser={loadEditUser}/>
            </div>
        )
    }
}
EditUser.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        toEditData : state.user.toEditData,
        roles: getListRolesResult(state),
        loading:!!state.roles.loading||!!state.user.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadEditUser: bindActionCreators(loadEditUser, dispatch),
        loadListRoles:bindActionCreators(loadListRoles,dispatch),
        dispatch,
        navigate
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditUser)
