const config  = {
  app: {
    port: process.env.PORT,
    sentryUrl: process.env.SENTRY_URL,
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