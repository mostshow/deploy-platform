
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {UserModify} from '../../components'
import {loadModifyUser} from '../../actions/user'
import { navigate } from '../../actions'

class EditUser extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { toEditData, loadModifyUser} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>个人资料修改</h2>
                <UserModify toEditData={toEditData}   loadModifyUser={loadModifyUser} />
            </div>
        )
    }
}
EditUser.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        toEditData : state.user.login.loginUser || {},
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadModifyUser: bindActionCreators(loadModifyUser, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditUser)

