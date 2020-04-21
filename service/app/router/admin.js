module.exports = (app) => {
    const {router, controller} = app;
    const adminauth = app.middleware.adminauth();
    router.get('/admin/index', controller.admin.main.index);
    router.get('/admin/getTypeInfo',adminauth ,controller.admin.main.getTypeInfo)
    router.post('/admin/checkLogin', adminauth, controller.admin.main.checkLogin);
}
