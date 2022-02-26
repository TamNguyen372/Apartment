module.exports = (app) => {
    const taikhoan = require('../controllers/taikhoan.controller');
    const auth = require('../middleware/auth');

    app.post('/taikhoan', taikhoan.create);

    app.post('/taikhoan/login', taikhoan.login);

    // app.get('/taikhoan', auth(['Admin']), taikhoan.getAll);
    app.get('/taikhoan', taikhoan.getAll);

    app.get('/taikhoan/getByKeyword', auth(['Admin']), taikhoan.getByKeyword);

    app.get('/taikhoan/:MaKhu', auth(['Admin']), taikhoan.getByMakhu);

    app.delete('/taikhoan/:id', auth(['Admin']), taikhoan.deleteById);

    app.put('/taikhoan/:id', auth(['Admin']), taikhoan.updateById);
};