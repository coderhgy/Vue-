import {request} from './request'

export function gethotcom(id,limit){
  return request({
    url:'/comment/music',
    params:{
      id,
      limit
    }
  })
}