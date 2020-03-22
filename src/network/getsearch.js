import {request} from './request'

export function getSearchDefault(){
  return request ({
    url:'/search/hot'
  })
}

export function getSearchMusic(keywords) {
  return request ({
    url:'/search',
    params:{
      keywords
    }
  })
}
export function getMusciDetail(ids) {
  return request ({
    url:'/song/detail',
    params:{
      ids
    }
  })
}