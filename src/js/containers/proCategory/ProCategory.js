import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/proCategory'
import { navigate } from '../../actions'
import { getListProCategoryResult } from '../../reducers/selectors'

import {ProCategoryList} from '../../components'

class ProCategoryPage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.loadListProCategory()
    }
    render() {
        let {data,actions,visible,loading,isEdit, dispatch, navigate} = this.props
        return (
            <ProCategoryList data={data} navigate={navigate} dispatch={dispatch} isEdit={isEdit}  visible={visible} loading={loading} actions={actions}/>
        )
    }
}

ProCategoryPage.propTypes = {
    // actions:  PropTypes.Object.isRequired,
    // data:  PropTypes.Object.isRequired,
    // visible:  PropTypes.Bool.isRequired,
    // loading:  PropTypes.String.isRequired
}

const mapStateToProps = (state) => {
    return {
        data:getData(state),
        visible:state.proCategory.visible,
        loading:state.proCategory.loading

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
    let data =  getListProCategoryResult(state)
    let dataSource = [];
        data.forEach(function(item){
            let temp ={}
            temp.key = item._id;
            temp.name = item.name;
            temp.updateBy = item.updateBy.username;
            temp.createBy = item.createBy.username;
            dataSource.push(temp)
        })
    return {dataSource:dataSource}
}
export default connect(mapStateToProps,mapDispatchToProps )(ProCategoryPage)
