import axios from 'axios'
import Mock from 'mockjs';
import {videoUrl, videoStoreUrl, tagUrl, akiraUrl, videoHomeUrl, weekUrl,videoShowUrl,videoRecommendUrl,commitUrl,searchUrl} from "./config"


export function getHomeVideoList() {

  return axios.get(videoHomeUrl).then((res) => {
    return res.data
  })

}

export function getRecommendVideoList(condition) {

  return axios.get(videoRecommendUrl,{
    params:{
      tagList: condition.tagList,
      akiraList: condition.akiraList,
    }
  }).then((res) => {
    return res.data
  })

}

export function getShowVideoList(id) {

  return axios.get(videoShowUrl + '/' +id).then((res) => {
    return res.data
  })

}

export function getVideoList() {

  return axios.get(videoUrl).then((res) => {
    return res.data
  })

}


export function getAkiraList() {
  return axios.get(akiraUrl).then((res) => {
    return res.data;
  })

}


export function getTagList() {
  return axios.get(tagUrl).then((res) => {
    return res.data;
  })

}

export function getWeekList() {
  return axios.get(weekUrl).then((res) => {
    return res.data;
  })

}

export function postVideoList(formData) {

  return axios({
    method: 'post',
    url: videoStoreUrl,
    data: formData
  }).then((res) => {

    return res.data;
  })
}

export function postUpdateVideoList(formData) {

  return axios({
    method: 'patch',
    url: videoUrl + '/' + formData.id,
    data: formData
  }).then((res) => {
    return res.data;
  })
}

export function deleteVideo(id) {
  return axios({
    method: 'delete',
    url: videoUrl + '/' + id,
  }).then((res) => {
    return res.data;
  })
}


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


export function getSearchVideo(data) {
  return axios({
    method: 'get',
    url: searchUrl,
    params:{
      title: data,
    },
  }).then(res => {
    return res.data;
  })
}