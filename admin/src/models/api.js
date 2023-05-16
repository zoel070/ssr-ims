const PREFIX = '/api';
export default {
  loginPassword: PREFIX + '/login/password',
  loginSMS: PREFIX + '/login/sms',
  customer: PREFIX + '/customer',
  customerItem: (id) => `${PREFIX}/customer/${id}`,
  kind: PREFIX + '/kind',
  kindItem: (id) => `${PREFIX}/kind/${id}`,
  article: PREFIX + '/article',
  articleItem: (id) => `${PREFIX}/article/${id}`,
}