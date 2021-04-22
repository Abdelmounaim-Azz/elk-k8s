const express=require("express");
const winston = require('winston');
const redis =require("redis") ;
const app = express();
const client = redis.createClient({
  host: "redis-srv",
});
client.set("visits", 0);
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
logger.log({
  level: 'info',
  message: 'go to elk!'
});
 
logger.info('Hello again  logs');
app.post("/api/visits", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send(visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
