const express = require('express');
const router = express.Router();
const devskillsCtrl = require('../controllers/devskills');
// All actual paths start with "/devskills"
router.get('/', devskillsCtrl.index)

// GET /todos/:id
router.get('/:id', devskillsCtrl.show);

module.exports = router;
