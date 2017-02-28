import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/imgCategory'
import { navigate } from '../../actions'
import { getListImgCategoryResult } from '../../reducers/selectors'

import {ImgCategoryList} from '../../components'

class ImgCategoryPage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.loadListImgCategory()
    }
    render() {
        let {data,actions,visible,loading,isEdit, dispatch, navigate} = this.props
        return (
            <ImgCategoryList data={data} navigate={navigate} dispatch={dispatch} isEdit={isEdit}  visible={visible} loading={loading} actions={actions}/>
        )
    }
}

ImgCategoryPage.propTypes = {
    // actions:  PropTypes.Object.isRequired,
    // data:  PropTypes.Object.isRequired,
    // visible:  PropTypes.Bool.isRequired,
    // loading:  PropTypes.String.isRequired
}

const mapStateToProps = (state) => {
    return {
        data:getData(state),
        visible:state.imgCategory.visible,
        loading:state.imgCategory.loading

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

    let data =  getListImgCategoryResult(state)
        console.log(data)
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
export default connect(mapStateToProps,mapDispatchToProps )(ImgCategoryPage)
