module.exports = (app) => {
  const hoadon = require('../controllers/hoadon.controller');

  app.post('/hoadon', hoadon.create);

  app.get('/hoadon', hoadon.findAll);

  app.get('/hoadon/:MaHoaDon', hoadon.findOne);

  app.put('/hoadon/:id', hoadon.updateById);

  app.delete('/hoadon/:id', hoadon.deleteById);
};
