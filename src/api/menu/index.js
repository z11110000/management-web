import request from "@/utils/request";

export function fetchListByPage(params) {

  return request({
    url: '/menu/listByPage',
    method: 'get',
    params: params
  })
}

export function fetchListAndChildren(params) {

  return request({
    url: '/menu/getListAndChildren',
    method: 'get',
    params: params
  })
}

export function fetchList(params) {

  return request({
    url: '/menu/list',
    method: 'get',
    params: params
  })
}

export function add(data) {
  return request({
    url: 'menu/add',
    method: 'post',
    data
  })
}

export function fetchGet(params) {
  return request({
    url: 'menu/get',
    method: 'get',
    params: params
  })
}

export function deleteById(params) {
  return request({
    url: 'menu/delete',
    method: 'delete',
    params: params
  })
}
