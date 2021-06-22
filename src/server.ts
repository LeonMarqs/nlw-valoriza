import 'reflect-meta-data';
import express from "express";

const app = express();

app.listen(3000, () => console.log("Server is running"));

app.get("/test" , (request, response) => {
  return response.send("Hello");
});

