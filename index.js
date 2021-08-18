const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');

var express = require('express');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(
  createProxyMiddleware({
    target: 'https://medium.com/',
    changeOrigin: true,
    pathRewrite: {
      [`^/`]: '',
    },
  })
);

app.listen(process.env.PORT || 3000, function () {
  console.log('server running');
});
