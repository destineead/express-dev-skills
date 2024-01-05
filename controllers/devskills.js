// Convention is to name the model in uppercase and singular
const Devskill = require('../models/devskill');

module.exports = {
    index,
    show,
    new: newDevskill,
    create,
    delete: deleteDevskill
  };

function deleteDevskill(req, res) {
  Devskill.deleteOne(req.params.id);
  res.redirect('/devskills');
}

function create(req, res) {
  console.log(req.body);
  Devskill.create(req.body);
  res.redirect('/devskills');
}

function newDevskill(req, res) {
  res.render('devskills/new', { title: 'New Skill' });
}

function show(req, res) {
  const devskill = Devskill.getOne(req.params.id);
  res.render('devskills/show', { devskill });
}

function index(req, res) {
  res.render('devskills/index', {
  devskills: Devskill.getAll()
  });
}