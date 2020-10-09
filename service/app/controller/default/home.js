"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../../libs/utils");
const http_1 = require("../../../../libs/interface/http");
const Controller = require("egg").Controller;
class HomeController extends Controller {
    async getArticleList() {
        let sql = "SELECT article.id as id," +
            "article.title as title," +
            "article.introduce as introduce," +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
            "article.view_count as view_count ," +
            "type.typeName as typeName " +
            "FROM article LEFT JOIN type ON article.type_id = type.Id";
        const results = await this.app.mysql.query(sql);
        this.ctx.body = {
            data: results,
        };
    }
    async getArticleById() {
        //先配置路由的动态传值，然后再接收值
        let id = this.ctx.params.id;
        let sql = "SELECT article.id as id," +
            "article.title as title," +
            "article.introduce as introduce," +
            "article.article_content as article_content," +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
            "article.view_count as view_count ," +
            "type.typeName as typeName ," +
            "type.id as typeId " +
            "FROM article LEFT JOIN type ON article.type_id = type.Id " +
            "WHERE article.id=" +
            id;
        const result = await this.app.mysql.query(sql);
        this.ctx.body = { data: result };
    }
    async getTypeInfo() {
        let menuList = await this.app.mysql.select("type");
        menuList = utils_1.makeMenuTree(menuList);
        this.ctx.body = {
            code: http_1.HttpStatus.ok,
            data: menuList,
        };
    }
    async getListById() {
        let id = this.ctx.params.id;
        let sql = "SELECT article.id as id," +
            "article.title as title," +
            "article.introduce as introduce," +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime," +
            "article.view_count as view_count ," +
            "type.typeName as typeName " +
            "FROM article LEFT JOIN type ON article.type_id = type.Id " +
            "WHERE type_id=" +
            id;
        const result = await this.app.mysql.query(sql);
        this.ctx.body = { data: result };
    }
}
module.exports = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUdiLGtEQUF1RDtBQUN2RCwwREFBNkQ7QUFFN0QsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUU3QyxNQUFNLGNBQWUsU0FBUSxVQUFVO0lBQ3JDLEtBQUssQ0FBQyxjQUFjO1FBQ2xCLElBQUksR0FBRyxHQUNMLDBCQUEwQjtZQUMxQix5QkFBeUI7WUFDekIsaUNBQWlDO1lBQ2pDLGlFQUFpRTtZQUNqRSxvQ0FBb0M7WUFDcEMsNEJBQTRCO1lBQzVCLDBEQUEwRCxDQUFDO1FBRTdELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ2QsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjO1FBQ2xCLG1CQUFtQjtRQUNuQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQ0wsMEJBQTBCO1lBQzFCLHlCQUF5QjtZQUN6QixpQ0FBaUM7WUFDakMsNkNBQTZDO1lBQzdDLGlFQUFpRTtZQUNqRSxvQ0FBb0M7WUFDcEMsNkJBQTZCO1lBQzdCLG9CQUFvQjtZQUNwQiwyREFBMkQ7WUFDM0QsbUJBQW1CO1lBQ25CLEVBQUUsQ0FBQztRQUNMLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVztRQUNmLElBQUksUUFBUSxHQUFlLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELFFBQVEsR0FBRyxvQkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ2QsSUFBSSxFQUFFLGlCQUFVLENBQUMsRUFBRTtZQUNuQixJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxHQUFHLEdBQ0wsMEJBQTBCO1lBQzFCLHlCQUF5QjtZQUN6QixpQ0FBaUM7WUFDakMsaUVBQWlFO1lBQ2pFLG9DQUFvQztZQUNwQyw0QkFBNEI7WUFDNUIsMkRBQTJEO1lBQzNELGdCQUFnQjtZQUNoQixFQUFFLENBQUM7UUFDTCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyJ9