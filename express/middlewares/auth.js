const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  token: function (req, res, next) {
    const token = req.headers.authorization
      ? req.headers.authorization
      : '';

    // 只检查localhost:8080
    if (req.headers['x-forwarded-host'] != 'localhost:8080') {
      return next(); // 跳过身份验证，继续下一个中间件或路由处理
    }

    if (token) {
      JWT.verify(token, JWT_SECRET, function (err, decoded) {
        if (!err) {
          res.locals.user_id = decoded.user_id;
          next();
        } else {
          return res.status(401).json({
            error_code: 401,
            message: 'Auth Token Expired'
          })
        }
      });
    } else {
      return res.status(401).json({
        error_code: 401,
        message: 'Auth Token Empty'
      })
    }
  },
}

//每次有网络请求进来都先确认下请求里是否有token，token用自己的密钥是否能成功解密，解密成功后再带着正确的user_id进行下一步