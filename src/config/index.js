const config  = {
  app: {
    port: process.env.PORT,
  },
  db: {
    url: process.env.MONGODB_URI,
  },
  data: {
    limit: "50mb",
    extended: false,
  },
};

module.exports = config;