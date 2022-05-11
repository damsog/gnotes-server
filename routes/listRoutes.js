const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

router.get('/create', listController.createList);
router.get('/getAllLists', listController.createList);
router.get('/getAllByUserId', listController.createList);
router.get('/getList', listController.getList);
router.get('/updateList', listController.updateList);
router.get('/deleteList', listController.deleteList);