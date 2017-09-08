import axios from 'axios'
import {commitUrl,FavUrl} from "./config"




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

