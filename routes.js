let express = require('express');
let router = express.Router();

let catalogController = require('./controllers/catalogController');
let userController = require('./controllers/userController');
let cartController = require('./controllers/cartController');

//Liste des routes vers les controleurs
router.get('/', userController.checkSession);
router.post('/connection', userController.login);
router.post('/connection2', userController.login2);
router.get('/subscribe', userController.subscribe);

router.get('/catalog', catalogController.formationList);
router.get('/login', catalogController.login);

router.get('/addToCart/:id', cartController.addToCart);
router.get('/showCart', cartController.showCart);
router.get('/delete/:id', cartController.deleteItem);

module.exports = router;