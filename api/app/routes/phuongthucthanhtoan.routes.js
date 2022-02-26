module.exports = (app) => {
    const phuongthucthanhtoan = require('../controllers/phuongthucthanhtoan.controller');
  
    app.post('/phuongthucthanhtoan', phuongthucthanhtoan.create);
  
    app.get('/phuongthucthanhtoan', phuongthucthanhtoan.findAll);
  
    app.put('/phuongthucthanhtoan/:idPTTT', phuongthucthanhtoan.updateById);
  
    app.delete('/phuongthucthanhtoan/:idPTTT', phuongthucthanhtoan.deleteById);
  };
  