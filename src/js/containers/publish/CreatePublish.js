
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {PublishForm} from '../../components'
import {loadCreatePublish} from '../../actions/publish'
import { navigate } from '../../actions'

class CreatePublish extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {loadCreatePublish, loading, navigate, dispatch} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>新建服务器配置</h2>
                <PublishForm loading={loading}  navigate={navigate} dispatch={dispatch}  loadCreatePublish={loadCreatePublish}/>
            </div>
        )
    }
}
CreatePublish.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        loading:!!state.publish.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCreatePublish: bindActionCreators(loadCreatePublish, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(CreatePublish)
