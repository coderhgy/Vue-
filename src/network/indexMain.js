import {request} from './request'

export function getNewsMusicList(){
  return request ({
    url:'/top/playlist/highquality?cat=华语&limit=10'
  })
}