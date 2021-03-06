const express = require('express');
const router = express.Router();

const coscomCtrl = require('../controllers/coscom');

router.get('/machines', coscomCtrl.getMachines);
router.get('/machines/:id', coscomCtrl.getMachineById);
router.get('/statuslist', coscomCtrl.getStatusList);

module.exports = router;
