import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/image'
import { navigate } from '../../actions'
import { getListImageResult } from '../../reducers/selectors'

import {ImageList} from '../../components'

class ImagePage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.loadListImage()
    }
    render() {
        let {data,actions,visible,loading,isEdit, dispatch, navigate} = this.props
        return (
            <ImageList data={data} navigate={navigate} dispatch={dispatch} isEdit={isEdit}  visible={visible} loading={loading} actions={actions}/>
        )
    }
}

ImagePage.propTypes = {
    // actions:  PropTypes.Object.isRequired,
    // data:  PropTypes.Object.isRequired,
    // visible:  PropTypes.Bool.isRequired,
    // loading:  PropTypes.String.isRequired
}

const mapStateToProps = (state) => {
    return {
        data:getData(state),
        visible:state.image.visible,
        loading:state.image.loading

    }
}
const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(actionsCreate, dispatch),
      navigate,
      dispatch

  }
}
const getData= (state) => {
    let data =  getListImageResult(state)
    let dataSource = [];
        data.forEach(function(item){
            let temp ={}
            temp.key = item._id;
            temp.name = item.name;
            temp.updateBy = item.updateBy&&item.updateBy.username;
            temp.createBy = item.createBy&&item.createBy.username;
            dataSource.push(temp)
        })
    return {dataSource:dataSource}
}
export default connect(mapStateToProps,mapDispatchToProps )(ImagePage)
