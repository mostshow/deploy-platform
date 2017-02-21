
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ProCategoryForm} from '../../components'
import {loadEditProCategory} from '../../actions/proCategory'
import { navigate } from '../../actions'
class EditProCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit:true
        }
    }
    render() {
        let {loadEditProCategory, toEditData, loading, navigate, dispatch} = this.props
        let {isEdit} = this.state;
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>编辑栏目</h2>
                <ProCategoryForm toEditData={toEditData} navigate={navigate} dispatch={dispatch} loading={loading} isEdit={isEdit} loadEditProCategory={loadEditProCategory}/>
            </div>
        )
    }
}
EditProCategory.propTypes = {
    
}
const mapStateToProps = (state,ownsProps) => {
    return {
        toEditData : state.proCategory.toEditData,
        loading:!!state.proCategory.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadEditProCategory: bindActionCreators(loadEditProCategory, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditProCategory)

