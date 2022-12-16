const http = require("http");
const fs = require("fs");
const url = require("url");
const hostName = "127.0.0.1";
const port = 8888;
console.log("Preparing server....");
const server = http.createServer((req, res) => {
  console.log("-----------URL" + req.url);
  var q = url.parse(req.url, true);
  console.log("host : " + q.host);
  console.log("pathName : " + q.pathname);
  console.log("search : " + q.search);
  let fileName = "index.html";
  if (q.pathname === "/") {
    fileName = "index.html";
  } else if (q.pathname === "/contact-us") {
    fileName = "contact-us.html";
  } else if (q.pathname === "/about-us") {
    fileName = "about-us.html";
  } else if (q.pathname === "/search") {
    //http://localhost:8888/search?name=Dhananjay&mood=thanda
    let searchData = q.query;
    console.log(JSON.stringify(searchData));
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Search Page</h2> You Searched for: " + searchData.topic);
    return res.end();
  } else {
    myReadFile("index.html", res);
  }
});
function myReadFile(fileName, res) {
  fs.readFile(fileName, function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}
server.listen(port, hostName, () => {
  console.log("server is running at " + hostName + "port : " + port);
});
