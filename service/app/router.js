const defaultRouter = require('./router/default');
const adminRouter = require('./router/admin');

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  defaultRouter(app);
  adminRouter(app)
};
