const devskills = [
    {id: 125223, devskill: 'Javascript', done: true},
    {id: 127904, devskill: 'HTML', done: true},
    {id: 139608, devskill: 'CSS', done: true},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
function deleteOne(id) {
  id = parseInt(id);
  const idx = devskills.findIndex((s) => s.id === id);
  devskills.splice(idx, 1)
}

function create(devskill) {
  //add the id
  devskill.id = Date.now() % 1000000;
  //new devskills wouldnt be done 
  devskill.done = false;
  devskills.push(devskill);
}
  
function getOne(id) {
  id = parseInt(id);
  return devskills.find((devskill) => devskill.id === id);
}

function getAll() {
  return devskills;
}