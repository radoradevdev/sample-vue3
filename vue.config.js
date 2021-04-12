module.exports = {
  devServer: {
    proxy: {
      "/.netlify": {
        target: "http://localhost:9000",
        pathRewrite: { [`^${process.env.VUE_APP_LAMBDA_URL}`]: "" }
      }
    }
  }
};