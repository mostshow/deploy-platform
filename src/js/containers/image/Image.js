import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/image'
import { navigate } from '../../actions'
import { getListImageResult, getListImgCategoryResult } from '../../reducers/selectors'
import { loadListImgCategory  } from '../../actions/imgCategory'

import {ImageList} from '../../components'

class ImagePage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.loadListImgCategory()
        this.props.actions.loadListImage({
            dataFrom:0,
            category:0,
            dataCount:10
        })
    }
    render() {
        let {data, actions, visible, pagination, loading,isEdit, dispatch, navigate, imgCategory} = this.props
        return (
            <ImageList data={data} pagination={pagination} navigate={navigate} imgCategory={imgCategory} dispatch={dispatch} isEdit={isEdit}  visible={visible} loading={loading} actions={actions}/>
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
        imgCategory:getListImgCategoryResult(state),
        data:getData(state),
        pagination:state.image.pagination,
        visible:state.image.visible,
        loading:!!state.imgCategory.loading||!!state.image.loading,

    }
}
const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(actionsCreate, dispatch),
      loadListImgCategory: bindActionCreators(loadListImgCategory, dispatch),
      navigate,
      dispatch

  }
}
const getData= (state) => {
    let data =  getListImageResult(state)
    let dataSource = [];
        data&&data.reData.forEach(function(item){
            let temp ={}
            temp.key = item._id;
            temp.url = item.url;
            temp.category = item.category.name;
            dataSource.push(temp)
        })
    return {dataSource:dataSource, totalRecord:data.totalRecord}
}
export default connect(mapStateToProps,mapDispatchToProps )(ImagePage)
