import axios from 'axios'
import {artUrl,artHotUrl} from "./config"

export function getHotArtList() {

  return axios.get(artHotUrl).then((res) => {
    return res.data
  })

}

export function getArtList() {

  return axios.get(artUrl).then((res) => {
    return res.data
  })

}

export function postArtStoreList(formData) {

  return axios({
    method: 'post',
    url: artUrl,
    data: formData
  }).then((res) => {

    return res.data;
  })
}

export function deleteArt(id) {
  return axios({
    method: 'delete',
    url: artUrl + '/' + id,
  }).then((res) => {
    return res.data;
  })
}

export function getShowArtList(id) {

  return axios.get(artUrl + '/' +id).then((res) => {
    return res.data
  })

}

export function postUpdateArtList(formData) {

  return axios({
    method: 'patch',
    url: artUrl + '/' + formData.id,
    data: formData
  }).then((res) => {
    return res.data;
  })
}