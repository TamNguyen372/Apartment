module.exports = (app) => {
    const image = require('../controllers/image.controller');
  
    app.post('/image', image.create);
  
    app.get('/image', image.findAll);
  
    app.put('/image/:id', image.updateById);
  
    app.delete('/image/:id', image.deleteById);
  };
  