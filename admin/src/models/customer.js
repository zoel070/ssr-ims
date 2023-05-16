import request from './request.js';
import API from './api.js';

export default {
  index () {
    return request.get(API.customer)
  },
  update (id,params) {
    return request.put(API.customerItem(id),params)
  },
  insert (params) {
    return request.post(API.customer,params)
  },
  delete (id) {
    return request.delete(API.customerItem(id))
  }
}