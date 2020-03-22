import { request } from './request'

export function getMvData(){
  return request ({
    url:'/top/mv?limit=10'
  })
}
export function playMv(mvid){
  return request ({
    url:'/mv/detail?',
    params:{
        mvid
    }

  })
}
export function getmvcom(id){
  return request ({
    url:'/comment/mv',
    params:{
      id
    }
  })
}