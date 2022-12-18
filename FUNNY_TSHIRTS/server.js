//1. Basic server
//2. req, resp, routes,status code, content-type: html , json
//3. nodemon

const express = require("express");
const app = express(); //server created
const path = require("path");
const trendingTShirt = require("./product-list");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true })); //use this parser

app.listen(8888, () => console.log("Express Server started at 8888")); // starts a server and enters the port value and a starting message.

app.get("/", (req, resp) => {
  resp.status(200); // response value
  resp.send("welcome to best funny Tshirt.com"); // flashes on the browser
});

app.get("/product/trending", (req, resp) => {
  resp.status(200);
  resp.json(trendingTShirt); // content type controller
});

app.get("/product/:productId", (req, resp) => {
  resp.status(200);
  console.log("product Id : " + req.params.productId);
  let productNumber = req.params.productId - 1;
  resp.json(trendingTShirt[productNumber]); // content type controller
});

app.get("/admin/new", (req, resp) => {
  resp.sendFile(__dirname + "/public/new_product.html");
});

app.post("/admin/addProduct", (req, resp) => {
  //collect all the information , prepare tshirt,tshirt update list
  const body = req.body;
  const tShirt = {
    id: trendingTShirt.length + 1,
    color: body.color,
    size: body.size,
    quote: body.quote,
    price: body.price,
  };
  trendingTShirt.push(tShirt);

  resp.send("Added T-Shirt with Quote : " + tShirt.quote);
});
