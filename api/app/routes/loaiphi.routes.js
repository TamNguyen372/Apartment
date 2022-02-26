module.exports = (app) => {
  const loaiphi = require('../controllers/loaiphi.controller');

  app.post('/loaiphi', loaiphi.create);

  app.get('/loaiphi', loaiphi.findAll);

  app.put('/loaiphi/:id', loaiphi.updateById);

  app.delete('/loaiphi/:id', loaiphi.deleteById);
};
