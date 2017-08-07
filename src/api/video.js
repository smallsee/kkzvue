import axios from 'axios'
import Mock from 'mockjs';
import {videoUrl, videoStoreUrl, TagUrl, AkiraUrl} from "./config"


export function getVideoList() {

  return axios.get(videoUrl).then((res) => {
    return res.data
  })

}


export function getAkiraList() {
  return axios.get(AkiraUrl).then((res) => {
    return res.data;
  })

}


export function getTagList() {
  return axios.get(TagUrl).then((res) => {
    return res.data;
  })

}


export function postVideoList(formData) {

  return axios({
    method: 'post',
    url: videoStoreUrl,
    params: {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlci9sb2dpbiIsImlhdCI6MTUwMjA5Mzc0NCwiZXhwIjoxNTAyNjk4NTQ0LCJuYmYiOjE1MDIwOTM3NDQsImp0aSI6ImtiMTlHcVdWU0ttNDhEQ2gifQ.MHkdPU1wRgRkPvcvIzAYLX6AOF27-RWkEw7xvRyQ1sw'
    },
    data: formData
  }).then((res) => {

    return res.data;
  })
}

export function postUpdateVideoList(formData) {

  return axios({
    method: 'patch',
    url: videoUrl + '/' + formData.id,
    params: {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlci9sb2dpbiIsImlhdCI6MTUwMjA5Mzc0NCwiZXhwIjoxNTAyNjk4NTQ0LCJuYmYiOjE1MDIwOTM3NDQsImp0aSI6ImtiMTlHcVdWU0ttNDhEQ2gifQ.MHkdPU1wRgRkPvcvIzAYLX6AOF27-RWkEw7xvRyQ1sw'
    },
    data: formData
  }).then((res) => {
    return res.data;
  })
}

export function deleteVideo(id) {
  return axios({
    method: 'delete',
    url: videoUrl + '/' + id,
    params: {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdXNlci9sb2dpbiIsImlhdCI6MTUwMjA5Mzc0NCwiZXhwIjoxNTAyNjk4NTQ0LCJuYmYiOjE1MDIwOTM3NDQsImp0aSI6ImtiMTlHcVdWU0ttNDhEQ2gifQ.MHkdPU1wRgRkPvcvIzAYLX6AOF27-RWkEw7xvRyQ1sw'
    }
  }).then((res) => {
    return res.data;
  })
}
