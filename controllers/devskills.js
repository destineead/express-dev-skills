// Convention is to name the model in uppercase and singular
const Devskill = require('../models/devskill');

module.exports = {
    index,
    show
  };

  function show(req, res) {
  
    const devskill = Devskill.getOne(req.params.id);
    res.render('devskills/show', { devskill });
  }

  function index(req, res) {
    res.render('devskills/index', {
      devskills: Devskill.getAll()
    });
  }