
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ProjectOperate} from '../../components'
import {loadOfflineProject, loadOnlineProject, loadRevertProject} from '../../actions/project'
import { navigate } from '../../actions'
import { loadListPublish  } from '../../actions/publish'
import { getListPublishResult } from '../../reducers/selectors'

class EditProProject extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.loadListPublish()
    }
    render() {
        let {loadOnlineProject, loadRevertProject, loadOfflineProject, onlinePublish,  operateData, publish ,navigate, dispatch, loading} = this.props
        return(
            <div className="create-form">
                <ProjectOperate operateData={operateData} loadRevertProject={loadRevertProject}  onlinePublish={onlinePublish}  navigate={navigate} dispatch={dispatch}  publish={publish} loading={loading} loadOnlineProject={loadOnlineProject}  loadOfflineProject={loadOfflineProject}/>
            </div>
        )
    }
}
EditProProject.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        operateData : state.project.operateData,
        onlinePublish:state.project.operateData.publish,
        publish: getListPublishResult(state),
        loading:!!state.project.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadOnlineProject: bindActionCreators(loadOnlineProject, dispatch),
        loadOfflineProject: bindActionCreators(loadOfflineProject, dispatch),
        loadListPublish:bindActionCreators(loadListPublish,dispatch),
        loadRevertProject:bindActionCreators(loadRevertProject,dispatch),
        dispatch,
        navigate
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditProProject)
