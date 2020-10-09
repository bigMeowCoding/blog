"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { router, controller } = app;
    router.get('/default/getArticleList', controller.default.home.getArticleList);
    router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
    router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
    router.get('/default/getListById/:id', controller.default.home.getListById);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNwQixNQUFNLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxHQUFHLEdBQUcsQ0FBQztJQUNqQyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzdFLE1BQU0sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDakYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN2RSxNQUFNLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRS9FLENBQUMsQ0FBQyJ9