import request from './request.js';
import API from './api.js';

export default {
  index () {
    return request.get(API.kind)
  },
  update (id,params) {
    return request.put(API.kindItem(id),params)
  },
  insert (params) {
    return request.post(API.kind,params)
  },
  delete (id) {
    return request.delete(API.kindItem(id))
  }
}