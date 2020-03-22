import {request} from './request'

export function getdetail(id){
  return request ({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}