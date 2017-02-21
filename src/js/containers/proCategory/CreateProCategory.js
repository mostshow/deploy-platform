
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ProCategoryForm} from '../../components'
import {loadCreateProCategory} from '../../actions/proCategory'
import { navigate } from '../../actions'

class CreateProCategory extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {loadCreateProCategory, loading, navigate, dispatch} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>新建栏目</h2>
                <ProCategoryForm loading={loading}  navigate={navigate} dispatch={dispatch}  loadCreateProCategory={loadCreateProCategory}/>
            </div>
        )
    }
}
CreateProCategory.propTypes = {
    
}
const mapStateToProps = (state,ownsProps) => {
    return {
        loading:!!state.proCategory.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCreateProCategory: bindActionCreators(loadCreateProCategory, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(CreateProCategory)
