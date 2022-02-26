module.exports = (app) => {
    const thongtinpttt = require('../controllers/thongtinpttt.controller');
  
    app.post('/thongtinpttt',thongtinpttt.create);
  
    app.get('/thongtinpttt', thongtinpttt.findAll);
  
    app.put('/thongtinpttt/:id', thongtinpttt.updateById);
  
    app.delete('/thongtinpttt/:id',thongtinpttt.deleteById);
  };
  