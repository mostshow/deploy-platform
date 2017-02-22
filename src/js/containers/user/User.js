import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/user'
import {UserList} from '../../components'
import { getListUserResult } from '../../reducers/selectors'
import moment from 'moment'
import { navigate } from '../../actions'

class UserPage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.loadListUser()
    }
    render() {
        let {data,actions,visible,loading, navigate, dispatch} = this.props
        return (
            <UserList data={data} navigate={navigate} dispatch={dispatch} visible={visible} loading={loading} actions={actions}/>
        )
    }
}

UserPage.propTypes = {
}

const mapStateToProps = (state) => {
    return {
        data:getData(state),
        visible:state.user.visible,
        loading:state.user.loading
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
    let data =  getListUserResult(state);
    let dataSource = [];
        data.forEach(function(item){
            let temp ={}
            temp.key = item._id;
            temp.username = item.username;
            temp.email = item.email||'/';
            temp.rolename = item.roleId.rolename;
            temp.createAt =moment(item.createAt).format("YYYY-MM-DD HH:ss");
            dataSource.push(temp)
        })
    return {dataSource:dataSource}
}
export default connect(mapStateToProps,mapDispatchToProps )(UserPage)
