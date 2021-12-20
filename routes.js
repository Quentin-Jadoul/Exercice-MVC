let express = require('express');
let router = express.Router();

let catalogController = require('./controllers/catalogController');
let userController = require('./controllers/userController');
let cartController = require('./controllers/cartController');

//Liste des routes vers les controleurs
router.get('/', (req,res) => res.redirect('/formation'));

router.get('/formation', userController.checkSession);

router.get('/catalog', catalogController.formationList);
router.get('/login', catalogController.login);

router.get('/addToCart/:id', cartController.addToCart);
router.get('/showCart', cartController.showCart);

router.post('/connection', userController.addName);
//router.get('/createUser', userController.createUser);


module.exports = router;