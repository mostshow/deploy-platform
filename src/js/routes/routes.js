
import React from 'react'
import { Route , IndexRoute } from 'react-router'
import * as Containers from '../containers'
// import requireAuth from '../utils/requireAuth';
import { message} from 'antd';
export default (
    <Route name='Home' breadcrumbName="home" component={Containers.App}>
      <Route  name='welcome' path="/" breadcrumbName="welcome" component={Containers.Home}/>
      <Route  name='project' path="/project/list" breadcrumbName="project"   component={Containers.ProjectPage}/>
      <Route  name='project' path="/project/new" breadcrumbName="project" onEnter={requireAuth} component={Containers.CreateProject}/>
      <Route  name='project' path="/project/edit" breadcrumbName="project" onEnter={requireAuth} component={Containers.EditProject}/>


      <Route  name='prostatus' path="/prostatus/list" breadcrumbName="prostatus"  component={Containers.ProstatusPage}/>
      <Route  name='prostatus' path="/prostatus/new" breadcrumbName="prostatus" onEnter={requireAuth} component={Containers.CreateProstatus}/>

      <Route  name='category' path="/category/list" breadcrumbName="category"  component={Containers.ProCategoryPage}/>
      <Route  name='category' path="/category/new" breadcrumbName="category" onEnter={requireAuth} component={Containers.CreateProCategory}/>
      <Route  name='category' path="/category/edit" breadcrumbName="category" onEnter={requireAuth} component={Containers.EditProCategory}/>

      <Route  name='user' path="/user/list" breadcrumbName="user" onEnter={requireAuth} component={Containers.UserPage}/>
      <Route  name='user' path="/user/new" breadcrumbName="user" onEnter={requireAuth} component={Containers.CreateUser}/>
      <Route  name='user' path="/user/edit" breadcrumbName="user" onEnter={requireAuth} component={Containers.EditUser}/>

      <Route  name='roles' path="/roles/list" breadcrumbName="roles" onEnter={requireAuth} component={Containers.RolesPage}/>
      <Route  name='roles' path="/roles/new" breadcrumbName="roles" onEnter={requireAuth} component={Containers.CreateRoles}/>
      <Route  name='roles' path="/roles/edit" breadcrumbName="roles" onEnter={requireAuth} component={Containers.EditRoles}/>



      <Route  name='login' path="/login" breadcrumbName="login" component={Containers.Login}/>
      <Route  name='login' path="/logout" breadcrumbName="login"component={Containers.Login}/>
    </Route>
)
function requireAuth(nextState, replace){
  if (!localStorage.getItem('jwtToken')){
    message.warning('请登录后操作!!')
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
