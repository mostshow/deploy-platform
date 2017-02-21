
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {RolesForm} from '../../components'
import {loadEditRoles} from '../../actions/roles'
import { navigate } from '../../actions'

class EditRoles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit:true
        }
    }
    render() {
        let {loadEditRoles, toEditData,navigate, dispatch, loading} = this.props
        let {isEdit} = this.state;
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>编辑角色</h2>
                <RolesForm toEditData={toEditData} loading={loading}  navigate={navigate} dispatch={dispatch}  isEdit={isEdit} loadEditRoles={loadEditRoles}/>
            </div>
        )
    }
}
EditRoles.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        toEditData : state.roles.toEditData,
        loading:!!state.roles.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadEditRoles: bindActionCreators(loadEditRoles, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditRoles)

