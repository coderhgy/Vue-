import {request} from './request'

export function getRankingData() {
  return request ({
    url:'/top/list?idx=1'
  })
}
 
