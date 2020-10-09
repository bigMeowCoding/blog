"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { router, controller } = app;
    const adminauth = app.middleware.adminauth();
    router.get('/admin/index', controller.admin.main.index);
    router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
    router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle);
    router.post('/admin/checkLogin', controller.admin.main.checkLogin);
    router.post('/admin/updateArticle', adminauth, controller.admin.main.updateArticle);
    router.get('/admin/getArticleList', adminauth, controller.admin.main.getArticleList);
    router.get('/admin/delArticle/:id', adminauth, controller.admin.main.delArticle);
    router.get('/admin/getArticleById/:id', adminauth, controller.admin.main.getArticleById);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZG1pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDbkIsTUFBTSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsR0FBRyxHQUFHLENBQUM7SUFDakMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLE1BQU0sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBRTFGLENBQUMsQ0FBQSJ9