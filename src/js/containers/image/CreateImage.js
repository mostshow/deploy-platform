
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ImageForm} from '../../components'
import {loadCreateImage} from '../../actions/image'
import { navigate } from '../../actions'
import { loadListImgCategory  } from '../../actions/imgCategory'
import { getListImgCategoryResult } from '../../reducers/selectors'

class CreateImage extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.loadListImgCategory()
    }
    render() {
        let {loadCreateImage, imgCategory, loading, navigate, dispatch} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>添加图片</h2>
                <ImageForm loading={loading} imgCategory={imgCategory}  navigate={navigate} dispatch={dispatch}  loadCreateImage={loadCreateImage}/>
            </div>
        )
    }
}
CreateImage.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        imgCategory:getListImgCategoryResult(state),
        loading:!!state.imgCategory.loading||!!state.image.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCreateImage: bindActionCreators(loadCreateImage, dispatch),
        loadListImgCategory:bindActionCreators(loadListImgCategory,dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(CreateImage)
