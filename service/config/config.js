/* eslint valid-jsdoc: "off" */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
exports.default = (appInfo) => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = {};
    // use for cookie sign key, should change to your own and keep security
    // add your middleware config here
    config.middleware = [];
    // add your user config here
    // const userConfig = {
    //   // myAppName: 'egg',
    // };
    // mysql配置
    config.mysql = {
        // database configuration
        client: {
            // host
            host: "localhost",
            // port
            port: "3306",
            // username
            user: "root",
            // password
            password: "zyj5632403",
            // database
            database: "react_blog",
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false,
    };
    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ["*"],
    };
    config.cors = {
        credentials: true,
        origin: (ctx) => ctx.get("origin"),
    };
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };
    config.keys = appInfo.name + "_1586172996609_2814";
    return Object.assign(Object.assign({}, config), bizConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQjtBQUUvQixZQUFZLENBQUM7O0FBSWI7O0dBRUc7QUFDSCxrQkFBZSxDQUFDLE9BQW1CLEVBQUUsRUFBRTtJQUNyQzs7O1FBR0k7SUFDSixNQUFNLE1BQU0sR0FBRyxFQUFnQyxDQUFDO0lBRWhELHVFQUF1RTtJQUV2RSxrQ0FBa0M7SUFDbEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFFdkIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsS0FBSztJQUNMLFVBQVU7SUFDVixNQUFNLENBQUMsS0FBSyxHQUFHO1FBQ2IseUJBQXlCO1FBQ3pCLE1BQU0sRUFBRTtZQUNOLE9BQU87WUFDUCxJQUFJLEVBQUUsV0FBVztZQUNqQixPQUFPO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXO1lBQ1gsSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXO1lBQ1gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVztZQUNYLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCO1FBQ0QsaUNBQWlDO1FBQ2pDLEdBQUcsRUFBRSxJQUFJO1FBQ1Qsb0NBQW9DO1FBQ3BDLEtBQUssRUFBRSxLQUFLO0tBQ2IsQ0FBQztJQUNGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFDaEIsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLEtBQUs7U0FDZDtRQUNELGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQztLQUN2QixDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7S0FDbkMsQ0FBQztJQUNGLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLFNBQVMsRUFBRSxpREFBaUQsT0FBTyxDQUFDLElBQUksRUFBRTtLQUMzRSxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0lBQ25ELHVDQUNLLE1BQU0sR0FDTixTQUFTLEVBQ1o7QUFDSixDQUFDLENBQUMifQ==