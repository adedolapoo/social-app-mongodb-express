require('./src/db/mongoose')
const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require('compression')
const cors = require('cors');
const bodyParser = require('body-parser');
const Sentry = require("@sentry/node");
const swaggerUi = require("swagger-ui-express");
const v1Router = require('./src/routes/v1')
const swaggerDocumentation = require("./src/swagger.json");
const config = require('./src/config');

class AppServer {
    constructor() {
        this.SERVER_STARTED = 'Example server started on port: '
        this.app = express();

        if(process.env.NODE_ENV === "production") {
            Sentry.init({dsn: config.app.sentryUrl});
        }

        this.config()
    }

    config() {
        this.app.use(compression())
        this.app.use(helmet());
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocumentation))
        this.app.use('/api/v1', v1Router)

        if(process.env.NODE_ENV === "production") {
            this.app.use(Sentry.Handlers.errorHandler());
        }
    }

    start(port) {
        this.app.get('*', (req, res) => {
            res.status(200).json({
                message: 'Welcome, Entry Point'
            })
        });
        this.app.listen(port, () => {
            console.info(`${this.SERVER_STARTED} ${port}`)
        });
    }
}

module.exports = AppServer;
