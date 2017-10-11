import axios from 'axios'
import {categoryUrl,shopUrl} from "./config"

export function getCategoryList() {

  return axios.get(categoryUrl).then((res) => {
    return res.data
  })

}

export function getCategoryCreateList() {

  return axios.get(categoryUrl,{
    params:{
      type: 'create',
    }
  }).then((res) => {
    return res.data
  })

}

export function postCategoryUpdateList(formData) {

  return axios({
    method: 'patch',
    url: categoryUrl + '/' + formData.id,
    data: formData
  }).then((res) => {

    return res.data;
  })
}

export function postCategoryStoreList(formData) {

  return axios({
    method: 'post',
    url: categoryUrl,
    data: formData
  }).then((res) => {

    return res.data;
  })
}


export function deleteCategory(id) {
  return axios({
    method: 'delete',
    url: categoryUrl + '/' + id,
  }).then((res) => {
    return res.data;
  })
}

export function getShopList() {

  return axios.get(shopUrl).then((res) => {
    return res.data
  })

}

export function postShopStoreList(formData) {

  return axios({
    method: 'post',
    url: shopUrl,
    data: formData
  }).then((res) => {

    return res.data;
  })
}

export function deleteShop(id) {
  return axios({
    method: 'delete',
    url: shopUrl + '/' + id,
  }).then((res) => {
    return res.data;
  })
}

export function getShowShopList(id) {

  return axios.get(shopUrl + '/' +id).then((res) => {
    return res.data
  })

}