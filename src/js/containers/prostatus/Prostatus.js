import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { default as actionsCreate  } from '../../actions/prostatus'

import {ProstatusList} from '../../components'

class ProstatusPage extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.actions.loadListProstatus()
    }
    render() {
        let {data,actions,visible,loading} = this.props
        return (
            <ProstatusList data={data} visible={visible} loading={loading} actions={actions}/>
        )
    }
}

ProstatusPage.propTypes = {
    // actions:  PropTypes.Object.isRequired,
    // data:  PropTypes.Object.isRequired,
    // visible:  PropTypes.Bool.isRequired,
    // loading:  PropTypes.String.isRequired
}

const mapStateToProps = (state) => {
    return {
        data:getData(state.prostatus),
        visible:state.prostatus.visible,
        loading:state.prostatus.loading
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionsCreate, dispatch)

  }
}
const getData= (stateData) => {
    let data =  (stateData.listProstatus&&stateData.listProstatus.result.reData)||[];
    let dataSource = [];
        data.forEach(function(item){
            let temp ={}
            temp.key = item._id;
            temp.name = item.name;
            temp.type = item.category.name;
            temp.createBy = item.createBy.username;
            dataSource.push(temp)
        })
    return {dataSource:dataSource}
}
export default connect(mapStateToProps,mapDispatchToProps )(ProstatusPage)
