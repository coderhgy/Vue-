import {request} from './request'

export function getMusicUrl(id,img){
  return request ({
    url:'/music/url',
    params:{
      id,img
    }
  })
}