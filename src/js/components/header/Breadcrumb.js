
import React, { Component, PropTypes } from 'react'
import { Link ,paths } from 'react-router';
import { Breadcrumb} from 'antd';
import { connect } from 'react-redux';

export default class BreadNav extends Component {
    render() {
        var {route, params, routes, paths} = this.props.navStatus
        var itemRender = () => {
            const last = routes.indexOf(route) === routes.length - 1;
            //return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
        }
        return (
            <Breadcrumb routes={routes} params={params} />
        );

    }
}


BreadNav.contextTypes = {
    router: PropTypes.object.isRequired
};
