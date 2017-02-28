
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {ImageForm} from '../../components'
import {loadCreateImage} from '../../actions/image'
import { navigate } from '../../actions'

class CreateImage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {loadCreateImage, loading, navigate, dispatch} = this.props
        return(
            <div className="create-form">
                <h2 className='mgb20 tac'>新建栏目</h2>
                <ImageForm loading={loading}  navigate={navigate} dispatch={dispatch}  loadCreateImage={loadCreateImage}/>
            </div>
        )
    }
}
CreateImage.propTypes = {

}
const mapStateToProps = (state,ownsProps) => {
    return {
        loading:!!state.image.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCreateImage: bindActionCreators(loadCreateImage, dispatch),
        navigate,
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(CreateImage)
