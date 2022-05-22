import request from "@/utils/request"

export function loginPassword(params) {

  return request({
    url: '/user/login',
    method: 'get',
    params: params
  })

}

