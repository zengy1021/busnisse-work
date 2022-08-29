const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/extension',
    createProxyMiddleware({
      target: 'https://apps.echatsoft.com:9443',
      changeOrigin: true,
    })
  );
};
