const http = require("http");

const hostName = "127.0.0.1";
const port = "3000";
const dt = require("./myDateTimeModule");

console.log("Prepare server...");

const server = http.createServer((req, res) => {
  // any request/response will be processed here
  console.log("Received request");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "Zindagi jhand ba fir bhi ghamand ba bolta hai <b>Dhanajay Mohokar</b>. <br>  " +
      dt.dateTime() +
      " " +
      " and time is " +
      dt.myTime()
  );
});
server.listen(port, hostName, () => {
  console.log("server is running at " + hostName + " port " + port);
});
