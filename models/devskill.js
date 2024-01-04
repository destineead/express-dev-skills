const devskills = [
    {id: 125223, devskill: 'Javascript✔️', done: true},
    {id: 127904, devskill: 'HTML✔️', done: true},
    {id: 139608, devskill: 'CSS✔️', done: true},
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getOne(id) {
    id = parseInt(id);
    return devskills.find((devskill) => devskill.id === id);
  }

  function getAll() {
    return devskills;
  }