import {request} from './request'

export function getbanner() {
    return request({
      url:'/banner',
      params:{
        type:2
      }
    })
}