module.exports = (app) => {
  const phiquanly = require('../controllers/phiquanly.controller');

  app.post('/phiquanly', phiquanly.create);

  app.get('/phiquanly', phiquanly.findAll);

  app.get('/phiquanly/:idPhi', phiquanly.findOne);

  app.put('/phiquanly/:id', phiquanly.updateById);

  app.delete('/phiquanly/:id', phiquanly.deleteById);
};
