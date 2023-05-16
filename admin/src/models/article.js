import request from './request.js';
import API from './api.js';

export default {
  index() {
    return request.get(API.article)
  },
  show(id) {
    return request.get(API.articleItem(id))
  },
  update(id, params) {
    return request.put(API.articleItem(id), params)
  },
  insert(params) {
    return request.post(API.article, params)
  },
  delete(id) {
    return request.delete(API.articleItem(id))
  },
}