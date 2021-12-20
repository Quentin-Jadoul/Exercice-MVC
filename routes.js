let express = require('express');
let router = express.Router();

let catalogController = require('./controllers/catalogController');
let userController = require('./controllers/userController');
let cartController = require('./controllers/cartController');

//Liste des routes vers les controleurs
router.get('/', userController.checkSession);
router.post('/connection', userController.login);

router.get('/catalog', catalogController.formationList);
router.get('/login', catalogController.login);

router.get('/addToCart/:id', cartController.addToCart);
router.get('/showCart', cartController.showCart);

module.exports = router;