const defaultRouter = require('./router/default');
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  defaultRouter(app);
};
