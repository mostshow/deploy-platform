
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {PublishForm} from '../../components'
import {loadEditPublish} from '../../actions/publish'
import { navigate } from '../../actions'
class EditPublish extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit:true
        }
    }
    render() {
        let {loadEditPublish, toEditData, loading, navigate, dispatch} = this.props
        let {isEdit} = this.state;
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>编辑服务器配置</h2>
                <PublishForm toEditData={toEditData} navigate={navigate} dispatch={dispatch} loading={loading} isEdit={isEdit} loadEditPublish={loadEditPublish}/>
            </div>
        )
    }
}
EditPublish.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        toEditData : state.publish.toEditData,
        loading:!!state.publish.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadEditPublish: bindActionCreators(loadEditPublish, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditPublish)

