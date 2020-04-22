let ipUrl = 'http://127.0.0.1:7002/admin/'

let servicePath = {
    getTypeInfo: ipUrl + 'getTypeInfo',  //  获得文章类别信息
    checkLogin: ipUrl + 'checkLogin',  //  检查用户名密码是否正确
    addArticle: ipUrl + 'addArticle',  //  添加文章
    updateArticle: ipUrl + 'updateArticle',  //  更新文章

}
export default servicePath;
