
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ImgCategoryForm} from '../../components'
import {loadEditImgCategory} from '../../actions/imgCategory'
import { navigate } from '../../actions'
class EditImgCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit:true
        }
    }
    render() {
        let {loadEditImgCategory, toEditData, loading, navigate, dispatch} = this.props
        let {isEdit} = this.state;
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>编辑栏目</h2>
                <ImgCategoryForm toEditData={toEditData} navigate={navigate} dispatch={dispatch} loading={loading} isEdit={isEdit} loadEditImgCategory={loadEditImgCategory}/>
            </div>
        )
    }
}
EditImgCategory.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        toEditData : state.imgCategory.toEditData,
        loading:!!state.imgCategory.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadEditImgCategory: bindActionCreators(loadEditImgCategory, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditImgCategory)

