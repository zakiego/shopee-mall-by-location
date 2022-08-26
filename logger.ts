const pino = require("pino");
const logger = pino({
  transport: {
    target: "pino-pretty",
  },
});

export default logger;
