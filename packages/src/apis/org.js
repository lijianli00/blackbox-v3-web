import { request } from '@/store'

/**
 * 组织管理模块接口
 */

// 部门管理
export const orgDept = {
  add: (params) => request.post('/orgDept/add', params),
  delete: (params) => request.post('/orgDept/delete', params),
  update: (params) => request.post('/orgDept/update', params),
  get: (params) => request.post('/orgDept/get', params),
  deptTree: (params) => request.post('/orgDept/deptTree', params),
}

// 人员管理
export const orgPerson = {
  listMainDeptPerson: (params) => request.post('/bbxAdminPerson/listMainDeptPerson', params),
  addUserAndPerson: (params) => request.post('/bbxAdminPerson/addUserAndPerson', params),
  quit: (params) => request.post('/bbxAdminPerson/deleteQuit', params),
  deptPersonTree: (params) => request.post('/bbxAdminPerson/findDeptPersonTree', params),
  get: (params) => request.post('/bbxAdminPerson/get', params),
  update: (params) => request.post('/bbxAdminPerson/update', params),
}

// 企业角色
export const orgRoleUnit = {
  listUnitRole: (params) => request.post('/bbxAdinRoleUnit/findUnitRole', params),
  add: (params) => request.post('/bbxAdinRoleUnit/add', params),
  update: (params) => request.post('/bbxAdinRoleUnit/update', params),
  delete: (params) => request.post('/bbxAdinRoleUnit/delete', params),
  get: (params) => request.post('/bbxAdinRoleUnit/get', params),
  saveAuthTreeByRoleId: (params) => request.post('/bbxAdinRoleUnit/addAuthTreeByRoleId', params),
  findAuthTreeByRoleId: (params) => request.post('/bbxAdinRoleUnit/findAuthTreeByRoleId', params),
}
// 企业角色批量授权
export const orgUnitRoleRelation = {
  add: (params) => request.post('/bbxAdminUnitRoleRelation/add', params),
  delete: (params) => request.post('/bbxAdminUnitRoleRelation/delete', params),
  listNotAuthUnitByRole: (params) => request.post('/bbxAdminUnitRoleRelation/listNotAuthUnitByRole', params),
  listAuthUnitByRole: (params) => request.post('/bbxAdminUnitRoleRelation/listAuthUnitByRole', params),
}

// 人员角色
export const orgRolePerson = {
  add: (params) => request.post('/bbxAdminRolePerson/add', params),
  update: (params) => request.post('/bbxAdminRolePerson/update', params),
  delete: (params) => request.post('/bbxAdminRolePerson/delete', params),
  listPersonRole: (params) => request.post('/bbxAdminRolePerson/findPersonRole', params),
  findAuthTreeByRoleId: (params) => request.post('/bbxAdminRolePerson/findAuthTreeByRoleId', params),
  saveAuthTreeByRoleId: (params) => request.post('/bbxAdminRolePerson/addAuthTreeByRoleId', params),
  listPersonRoleByClientId: (params) => request.post('/bbxAdminRolePerson/findPersonRole', params),
  findPersonRoleByAppId: (params) => request.post('/bbxAdminRolePerson/findPersonRoleByAppId', params),
}

// 角色授权
export const orgRolePersonRelation = {
  add: (params) => request.post('/bbxAdminRolePersonRelation/add', params),
  delete: (params) => request.post('/bbxAdminRolePersonRelation/delete', params),
  listAuthPersonByRole: (params) => request.post('/bbxAdminRolePersonRelation/listAuthPersonByRole', params),
}

// 企业管理
export const orgUnit = {
  add: (params) => request.post('/bbxAdminUnit/add', params),
  update: (params) => request.post('/bbxAdminUnit/update', params),
  list: (params) => request.post('/bbxAdminUnit/list', params),
  get: (params) => request.post('/bbxAdminUnit/get', params),
}

// 企业部门
export const orgUnitDept = {
  add: (params) => request.post('/bbxAdminUnitDept/add', params),
  delete: (params) => request.post('/bbxAdminUnitDept/delete', params),
  update: (params) => request.post('/bbxAdminUnitDept/update', params),
  get: (params) => request.post('/bbxAdminUnitDept/get', params),
  deptTree: (params) => request.post('/bbxAdminUnitDept/deptTree', params),
}

// 企业团队
export const orgUnitTeam = {
  add: (params) => request.post('/bbxAdminUnitTeam/add', params),
  delete: (params) => request.post('/bbxAdminUnitTeam/delete', params),
  update: (params) => request.post('/bbxAdminUnitTeam/update', params),
  get: (params) => request.post('/bbxAdminUnitTeam/get', params),
  list: (params) => request.post('/bbxAdminUnitTeam/list', params),
}

// 数据类型
export const orgClass = {
  listClassType: (params) => request.post('/bbxAdminClass/listClassType', params),
  listAllClass: (params) => request.post('/bbxAdminClass/listAllClass', params),
}
