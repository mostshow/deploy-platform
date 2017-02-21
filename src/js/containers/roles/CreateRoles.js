
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {RolesForm} from '../../components'
import {loadCreateRoles} from '../../actions/roles'
import { navigate } from '../../actions'

class CreateRoles extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {loadCreateRoles,navigate, dispatch, loading} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>新建角色</h2>
                <RolesForm loading={loading}  navigate={navigate} dispatch={dispatch}  loadCreateRoles={loadCreateRoles}/>
            </div>
        )
    }
}
CreateRoles.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        loading:!!state.roles.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCreateRoles: bindActionCreators(loadCreateRoles, dispatch),
        navigate,
        dispatch

    }
}

export default connect(mapStateToProps,mapDispatchToProps )(CreateRoles)
