"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class MainController extends egg_1.Controller {
    async index() {
        //首页的文章列表数据
        this.ctx.body = "hi api";
    }
    //判断用户名密码是否正确
    async checkLogin() {
        let userName = this.ctx.request.body.userName;
        let password = this.ctx.request.body.password;
        const sql = " SELECT userName FROM admin_user WHERE userName = '" +
            userName +
            "' AND password = '" +
            password +
            "'";
        // @ts-ignore
        const res = await this.app.mysql.query(sql);
        if (res.length > 0) {
            //登录成功,进行session缓存
            let openId = new Date().getTime();
            this.ctx.session.openId = { openId: openId };
            this.ctx.body = { data: "登录成功", openId: openId };
        }
        else {
            this.ctx.body = { data: "登录失败" };
        }
    }
    //后台文章分类信息
    async getTypeInfo() {
        // @ts-ignore
        const resType = await this.app.mysql.select("type");
        this.ctx.body = { data: resType };
    }
    async addArticle() {
        let tmpArticle = this.ctx.request.body;
        // tmpArticle.
        // @ts-ignore
        const result = await this.app.mysql.insert("article", tmpArticle);
        const insertSuccess = result.affectedRows === 1;
        const insertId = result.insertId;
        this.ctx.body = {
            isScuccess: insertSuccess,
            insertId: insertId,
        };
    }
    //修改文章
    async updateArticle() {
        let tmpArticle = this.ctx.request.body;
        // @ts-ignore
        const result = await this.app.mysql.update("article", tmpArticle);
        const updateSuccess = result.affectedRows === 1;
        this.ctx.body = {
            isScuccess: updateSuccess,
        };
    }
    //获得文章列表
    async getArticleList() {
        let sql = "SELECT article.id as id," +
            "article.title as title," +
            "article.introduce as introduce," +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
            "type.typeName as typeName " +
            "FROM article LEFT JOIN type ON article.type_id = type.Id " +
            "ORDER BY article.id DESC ";
        // @ts-ignore
        const resList = await this.app.mysql.query(sql);
        this.ctx.body = { list: resList };
    }
    async delArticle() {
        let id = this.ctx.params.id;
        // @ts-ignore
        const res = await this.app.mysql.delete("article", { id: id });
        this.ctx.body = { data: res };
    }
    //根据文章ID得到文章详情，用于修改文章
    async getArticleById() {
        let id = this.ctx.params.id;
        let sql = "SELECT article.id as id," +
            "article.title as title," +
            "article.introduce as introduce," +
            "article.article_content as article_content," +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
            "article.view_count as view_count ," +
            "type.typeName as typeName ," +
            "type.id as typeId " +
            "FROM article LEFT JOIN type ON article.type_id = type.Id " +
            "WHERE article.id=" +
            id;
        // @ts-ignore
        const result = await this.app.mysql.query(sql);
        this.ctx.body = { data: result };
    }
}
module.exports = MainController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLDZCQUFpQztBQUVqQyxNQUFNLGNBQWUsU0FBUSxnQkFBVTtJQUNyQyxLQUFLLENBQUMsS0FBSztRQUNULFdBQVc7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7SUFDYixLQUFLLENBQUMsVUFBVTtRQUNkLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxNQUFNLEdBQUcsR0FDUCxxREFBcUQ7WUFDckQsUUFBUTtZQUNSLG9CQUFvQjtZQUNwQixRQUFRO1lBQ1IsR0FBRyxDQUFDO1FBRU4sYUFBYTtRQUNiLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEIsa0JBQWtCO1lBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDbEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsSUFBSSxF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