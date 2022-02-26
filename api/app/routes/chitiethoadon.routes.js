module.exports = (app) => {
  const chitiethoadon = require('../controllers/chitiethoadon.controller');

  app.post('/chitiethoadon', chitiethoadon.create);

  app.get('/chitiethoadon', chitiethoadon.findAll);

  app.put('/chitiethoadon/:id', chitiethoadon.updateById);

  app.delete('/chitiethoadon/:id', chitiethoadon.deleteById);
};
