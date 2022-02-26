module.exports = (app) => {
  const phixe = require('../controllers/phixe.controller');

  app.post('/phixe', phixe.create);

  app.get('/phixe', phixe.findAll);

  app.put('/phixe/:id', phixe.updateById);

  app.delete('/phixe/:id', phixe.deleteById);
};
