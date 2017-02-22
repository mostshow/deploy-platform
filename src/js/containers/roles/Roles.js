import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/roles'
import { navigate } from '../../actions'
import { getListRolesResult } from '../../reducers/selectors'
import {RolesList} from '../../components'
import moment from 'moment'

class RolesPage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.loadListRoles()
    }
    render() {
        let {data,actions,visible,loading,isEdit, dispatch, navigate} = this.props
        return (
            <RolesList data={data} navigate={navigate} dispatch={dispatch} isEdit={isEdit}  visible={visible} loading={loading} actions={actions}/>
        )
    }
}

RolesPage.propTypes = {
    // actions:  PropTypes.Object.isRequired,
    // data:  PropTypes.Object.isRequired,
    // visible:  PropTypes.Bool.isRequired,
    // loading:  PropTypes.String.isRequired
}

const mapStateToProps = (state) => {
    return {
        data:getData(state),
        visible:state.roles.visible,
        loading:state.roles.loading

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
    let data =  getListRolesResult(state)
    let dataSource = [];
        data.forEach(function(item){
            let temp ={}
            temp.key = item._id;
            temp.rolename = item.rolename;
            temp.roleId = item.roleId;
            temp.updateAt = moment(item.updateAt).format("YYYY-MM-DD HH:ss");
            temp.createAt = moment(item.createAt).format("YYYY-MM-DD HH:ss");
            dataSource.push(temp)
        })
    return {dataSource:dataSource}
}
export default connect(mapStateToProps,mapDispatchToProps )(RolesPage)
