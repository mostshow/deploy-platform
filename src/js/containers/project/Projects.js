import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/project'
import {ProjectList} from '../../components'
import { loadListProCategory  } from '../../actions/proCategory'
import { getListProjectResult } from '../../reducers/selectors'
import { navigate } from '../../actions'
import { getListProCategoryResult } from '../../reducers/selectors'


class ProjectPage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.loadListProCategory()
        this.props.actions.loadListProject({
            dataFrom:0,
            category:0,
            dataCount:10
        })
    }
    render() {
        let {data,actions,visible,loading, proCategory, pagination, jump} = this.props
        return (
            <ProjectList data={data}  pagination={pagination} proCategory={proCategory} jump={jump} visible={visible} loading={loading} actions={actions}/>
        )
    }
}

ProjectPage.propTypes = {
}

const mapStateToProps = (state) => {
    return {
        data:getData(state),
        proCategory:getListProCategoryResult(state),
        pagination:state.project.pagination,
        visible:state.project.visible,
        loading:state.project.loading
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(actionsCreate, dispatch),
      loadListProCategory:bindActionCreators(loadListProCategory,dispatch),
      jump:bindActionCreators(navigate,dispatch),

  }
}
const getData= (state) => {
    let data =  getListProjectResult(state);
    let dataSource =data.reData.map(function(item){
            item.createAt =moment(item.createAt).format("YYYY-MM-DD HH:ss");
            item.type = item.category.name;
            item.createBy = item.createBy&&item.createBy.username;
            item.key = item._id;
            return item;
        })
    return {dataSource:dataSource, totalRecord:data.totalRecord}
}
export default connect(mapStateToProps,mapDispatchToProps )(ProjectPage)
