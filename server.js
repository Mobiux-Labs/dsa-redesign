const express = require("express");
const next = require("next");
const {
   createProxyMiddleware,
   responseInterceptor,
} = require("http-proxy-middleware");
const devProxy = {
   "/api/subs": {
      target: "https://new.dealstreetasia.com",
      pathRewrite: {
         "^/api/subs": "/api/subs",
      },
      changeOrigin: true,
      auth: "betauser:dsabeta",
      selfHandleResponse: true,
      onProxyRes: responseInterceptor(
         async (responseBuffer, proxyRes, req, res) => {
            return responseBuffer;
         }
      ),
   },
   "/api/content": {
      target: "https://new.dealstreetasia.com",
      pathRewrite: {
         "^/api/content": "/api/content",
      },
      changeOrigin: true,
      auth: "betauser:dsabeta",
      selfHandleResponse: true,
      onProxyRes: responseInterceptor(
         async (responseBuffer, proxyRes, req, res) => {
            return responseBuffer;
         }
      ),
   },
   "/subs": {
      target: "https://new.dealstreetasia.com",
      pathRewrite: {
         "^/subs": "/subs",
      },
      changeOrigin: true,
      auth: "betauser:dsabeta",
      selfHandleResponse: true,
      onProxyRes: responseInterceptor(
         async (responseBuffer, proxyRes, req, res) => {
            return responseBuffer;
         }
      ),
   },
   "/wp-json": {
      target: "https://new.dealstreetasia.com",
      pathRewrite: {
         "^/wp-json": "/wp-json",
      },
      changeOrigin: true,
      auth: "betauser:dsabeta",
      selfHandleResponse: true,
      onProxyRes: responseInterceptor(
         async (responseBuffer, proxyRes, req, res) => {
            return responseBuffer;
         }
      ),
   },
   "/accounts": {
      target: "https://new.dealstreetasia.com",
      pathRewrite: {
         "^/accounts": "/accounts",
      },
      changeOrigin: true,
      auth: "betauser:dsabeta",
   },
   "/graphql": {
      target: "https://new.dealstreetasia.com",
      pathRewrite: {
         "^/graphql": "/graphql",
      },
      changeOrigin: true,
      auth: "betauser:dsabeta",
   },
};

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({
   dev,
});
const handle = app.getRequestHandler();
app.prepare()
   .then(() => {
      const server = express();
      if (dev && devProxy) {
         Object.keys(devProxy).forEach(function (context) {
            server.use(createProxyMiddleware(context, devProxy[context]));
         });
      }
      server.all("*", (req, res) => {
         handle(req, res);
      });
      server.listen(port, (err) => {
         if (err) {
            throw err;
         }
         console.log(`> Ready on http://localhost:${port}`);
      });
   })
   .catch((err) => {
      console.log("An error occurred, unable to start the server");
      console.log(err);
   });
