

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ProjectForm } from '../../components'
import { navigate } from '../../actions'
import { loadCreateProject } from '../../actions/project'
import { loadListProCategory  } from '../../actions/proCategory'
import { getListProCategoryResult } from '../../reducers/selectors'

class CreateProject extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.loadListProCategory()
    }
    render() {
        let {loadCreateProject, proCategory,navigate, dispatch ,loading} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>新建项目</h2>
                <ProjectForm proCategory={proCategory} navigate={navigate} dispatch={dispatch} loading={loading} loadCreateProject={loadCreateProject}/>
            </div>
        )
    }
}
CreateProject.propTypes = {
    
}
const mapStateToProps = (state,ownsProps) => {
    return {
        proCategory:getListProCategoryResult(state),
        loading:!!state.proCategory.loading||!!state.project.loading

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCreateProject:bindActionCreators(loadCreateProject,dispatch),
        loadListProCategory:bindActionCreators(loadListProCategory,dispatch),
        dispatch,
        navigate
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(CreateProject)
