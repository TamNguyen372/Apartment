module.exports = (app) => {
  const phinuoc = require('../controllers/phinuoc.controller');

  app.post('/phinuoc', phinuoc.create);

  app.get('/phinuoc', phinuoc.findAll);

  app.put('/phinuoc/:id', phinuoc.updateById);

  app.delete('/phinuoc/:id', phinuoc.deleteById);
};
