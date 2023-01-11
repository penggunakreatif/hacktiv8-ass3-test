const router = require('express').Router();
const authentication = require('../middlewares/authentication');

const PhotoController = require('../controllers/photoController');
const UserController = require('../controllers/userController');
const authorization = require('../middlewares/authorization');

router.post('/user/register', UserController.register);
router.post('/user/login', UserController.login);

router.use(authentication);

router.get('/photos', PhotoController.GetAllPhotos);
router.get('/photos/:id', PhotoController.getById);
router.post('/photos', PhotoController.createPhoto);
router.use('/photos/:id',authorization);
router.put('/photos/:id', PhotoController.updatePhoto);
router.delete('/photos/:id', PhotoController.deletePhoto);

module.exports = router;