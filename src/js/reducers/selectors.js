
export const getListProCategory = (state) => state.proCategory.listProCategory

export const getListRoles = (state) => state.proCategory.listRoles

export const getListProCategoryResult = (state) => {
    if(state.proCategory.listProCategory&&state.proCategory.listProCategory.code==0){
        return state.proCategory.listProCategory.result.reData
    }
    return []
}

export const getListUserResult = (state) => {
    if(state.user.listUser&&state.user.listUser.code==0){
        return state.user.listUser.result.reData
    }
    return []
}

export const getListRolesResult = (state) => {
    if(state.roles.listRoles&&state.roles.listRoles.code==0){
        return state.roles.listRoles.result.reData
    }
    return []
}


export const getListProjectResult = (state) => {
    if(state.project.listProject&&state.project.listProject.code==0){
        return state.project.listProject.result.reData
    }
    return []
}
