var express = require('express');
var router = express.Router();
const userController = require('./../controllers/user.js');
const customerController = require('./../controllers/customer.js');
const kindController = require('./../controllers/kind.js');
const articleController = require('./../controllers/article.js');
const Auth = require('../middlewares/auth.js');

router.post('/login/password', userController.authPassword);
router.post('/login/sms', userController.authSMS);

router.use(Auth.token);

router.get('/customer', customerController.index);
router.post('/customer', customerController.insert);
router.put('/customer/:id', customerController.update);
router.delete('/customer/:id', customerController.delete);


router.get('/kind', kindController.index);
router.post('/kind', kindController.insert);
router.put('/kind/:id', kindController.update);
router.delete('/kind/:id', kindController.delete);


router.get('/article', articleController.index);
router.get('/article/:id', articleController.show);
router.post('/article', articleController.insert);
router.put('/article/:id', articleController.update);
router.delete('/article/:id', articleController.delete);



module.exports = router;
