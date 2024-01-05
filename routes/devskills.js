const express = require('express');
const router = express.Router();
const devskillsCtrl = require('../controllers/devskills');

// All actual paths start with "/devskills"

// GET /devskills
router.get('/', devskillsCtrl.index)
// GET /devskills/new
router.get('/new', devskillsCtrl.new);
// GET /todos/:id
router.get('/:id', devskillsCtrl.show);
// POST /devskills
router.post('/', devskillsCtrl.create);
// DELETE /devskills/:id
router.delete('/:id', devskillsCtrl.delete);


module.exports = router;
