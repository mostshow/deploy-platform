
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ProjectForm} from '../../components'
import {loadEditProject} from '../../actions/project'
import { navigate } from '../../actions'
import { loadListProCategory  } from '../../actions/proCategory'
import { getListProCategoryResult } from '../../reducers/selectors'

class EditProProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit:true
        }
    }
    componentWillMount() {
        this.props.loadListProCategory()
    }
    render() {
        let {loadEditProject, toEditData, proCategory,navigate, dispatch, loading} = this.props
        let {isEdit} = this.state;
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>编辑项目</h2>
                <ProjectForm toEditData={toEditData}  navigate={navigate} dispatch={dispatch}  proCategory={proCategory} loading={loading} isEdit={isEdit} loadEditProject={loadEditProject}/>
            </div>
        )
    }
}
EditProProject.propTypes = {
    
}
const mapStateToProps = (state,ownsProps) => {
    return {
        toEditData : state.project.toEditData,
        proCategory: getListProCategoryResult(state),
        loading:!!state.proCategory.loading||!!state.project.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadEditProject: bindActionCreators(loadEditProject, dispatch),
        loadListProCategory:bindActionCreators(loadListProCategory,dispatch),
        dispatch,
        navigate
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditProProject)
