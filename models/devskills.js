const devskills = [
    {id: 125223, devskill: 'Javascript', done: true},
    {id: 127904, devskill: 'HTML', done: true},
    {id: 139608, devskill: 'CSS', done: true},
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return devskills;
  }