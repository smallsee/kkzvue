import axios from 'axios'
import {commitUrl,FavUrl,FanUrl,hasFanUrl} from "./config"




export function postStoreCommit(id,type,commit) {
  return axios({
    method: 'post',
    url: commitUrl,
    data:{
      id: id,
      type: type,
      commit: commit
    },
  }).then(res => {
    return res.data;
  })
}

export function postStoreFav(id,type,commit) {
  return axios({
    method: 'post',
    url: FavUrl,
    data:{
      id: id,
      type: type,
      commit: commit
    },
  }).then(res => {
    return res.data;
  })
}

export function postStoreFan(fan_id,star_id) {
  return axios({
    method: 'post',
    url: FanUrl,
    data:{
      fan_id: fan_id,
      star_id: star_id
    },
  }).then(res => {
    return res.data;
  })
}

export function gethasFan(fan_id,star_id) {
  return axios({
    method: 'get',
    url: hasFanUrl,
    params:{
      fan_id: fan_id,
      star_id: star_id
    },
  }).then(res => {
    return res.data;
  })
}