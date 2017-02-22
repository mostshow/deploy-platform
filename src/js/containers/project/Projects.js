import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/project'
import {ProjectList} from '../../components'
import { getListProjectResult } from '../../reducers/selectors'
import moment from 'moment'
import { navigate } from '../../actions'

class ProjectPage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.loadListProject()
    }
    render() {
        let {data,actions,visible,loading, navigate, dispatch} = this.props
        return (
            <ProjectList data={data} navigate={navigate} dispatch={dispatch} visible={visible} loading={loading} actions={actions}/>
        )
    }
}

ProjectPage.propTypes = {
}

const mapStateToProps = (state) => {
    return {
        data:getData(state),
        visible:state.project.visible,
        loading:state.project.loading
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
    let data =  getListProjectResult(state);
    let dataSource =data.map(function(item){
            item.createAt =moment(item.createAt).format("YYYY-MM-DD HH:ss");
            item.type = item.category.name;
            item.createBy = item.createBy&&item.createBy.username;
            item.key = item._id;
            return item;
        })
    return {dataSource:dataSource}
}
export default connect(mapStateToProps,mapDispatchToProps )(ProjectPage)
