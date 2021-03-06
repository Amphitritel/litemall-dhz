import request from '@/utils/request'

export function listGoodsClassify(data) {
  return request({
    url: '/category/queryPageByMap',
    method: 'post',
    data
  })
}

export function listCategoryNames(query) {
  return request({
    url: '/category/findCategoryNames',
    method: 'get',
    params: query
  })
}

export function createGoodsClassify(data) {
  return request({
    url: '/category/insert',
    method: 'post',
    data
  })
}

export function updateGoodsClassify(data) {
  return request({
    url: '/category/update',
    method: 'post',
    data
  })
}

export function deleteCategory(data) {
  return request({
    url: '/category/update',
    method: 'post',
    data
  })
}
