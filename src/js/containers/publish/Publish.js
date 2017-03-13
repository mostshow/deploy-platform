import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/publish'
import { navigate } from '../../actions'
import { getListPublishResult } from '../../reducers/selectors'
import moment from 'moment'

import {PublishList} from '../../components'

class PublishPage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.loadListPublish()
    }
    render() {
        let {data,actions,visible,loading,isEdit, dispatch, navigate} = this.props
        return (
            <PublishList data={data} navigate={navigate} dispatch={dispatch} isEdit={isEdit}  visible={visible} loading={loading} actions={actions}/>
        )
    }
}

PublishPage.propTypes = {
    // actions:  PropTypes.Object.isRequired,
    // data:  PropTypes.Object.isRequired,
    // visible:  PropTypes.Bool.isRequired,
    // loading:  PropTypes.String.isRequired
}

const mapStateToProps = (state) => {
    return {
        data:getData(state),
        visible:state.publish.visible,
        loading:state.publish.loading

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
    let data =  getListPublishResult(state)
    let dataSource = [];
        data.forEach(function(item){
            let temp ={}
            temp.key = item._id;
            temp.publishName = item.publishName;
            temp.ip = item.ip;
            temp.generate = item.generate==1?'是':'否';
            temp.domain = item.domain;
            temp.dir = item.dir;
            temp.createAt =moment(item.createAt).format("YYYY-MM-DD HH:ss");
            temp.createBy = item.createBy&&item.createBy.username;
            dataSource.push(temp)
        })
    return {dataSource:dataSource}
}
export default connect(mapStateToProps,mapDispatchToProps )(PublishPage)
