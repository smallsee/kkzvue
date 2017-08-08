import axios from 'axios'
import {LoginUrl, UserInfoUrl} from "./config"


export function getUserInfo(token) {

  return axios.get(UserInfoUrl,{
    params: {
      token: token
    }
  }).then((res) => {
    return res.data
  })

}

export function postLogin(formData) {

  return axios({
    method: 'post',
    url: LoginUrl,
    data: formData
  }).then((res) => {

    return res.data;
  })

}
