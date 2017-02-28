
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ImgCategoryForm} from '../../components'
import {loadCreateImgCategory} from '../../actions/imgCategory'
import { navigate } from '../../actions'

class CreateImgCategory extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {loadCreateImgCategory, loading, navigate, dispatch} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>新建栏目</h2>
                <ImgCategoryForm loading={loading}  navigate={navigate} dispatch={dispatch}  loadCreateImgCategory={loadCreateImgCategory}/>
            </div>
        )
    }
}
CreateImgCategory.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        loading:!!state.imgCategory.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCreateImgCategory: bindActionCreators(loadCreateImgCategory, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(CreateImgCategory)
