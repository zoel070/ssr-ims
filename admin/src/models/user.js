import request from './request.js';
import API from './api.js';

export default {
  loginPassword(params) {
    return request.post(API.loginPassword, params)
  },
  loginSMS(params) {
    return request.post(API.loginSMS, params)
  },
  logout() {
    localStorage.clear()
  },
}