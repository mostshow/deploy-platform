
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ImageForm} from '../../components'
import {loadEditImage} from '../../actions/image'
import { navigate } from '../../actions'
class EditImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit:true
        }
    }
    render() {
        let {loadEditImage, toEditData, loading, navigate, dispatch} = this.props
        let {isEdit} = this.state;
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>编辑栏目</h2>
                <ImageForm toEditData={toEditData} navigate={navigate} dispatch={dispatch} loading={loading} isEdit={isEdit} loadEditImage={loadEditImage}/>
            </div>
        )
    }
}
EditImage.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        toEditData : state.image.toEditData,
        loading:!!state.image.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadEditImage: bindActionCreators(loadEditImage, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(EditImage)

