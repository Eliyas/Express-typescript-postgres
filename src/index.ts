import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import {PostController} from "./controller/post-controller";

 // create express app
const app = express();
app.set("port", process.env.PORT || 3000);

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
  });
  
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    app.use(bodyParser.json());

    // register all application routes
   
    let postController = new PostController();
    app.get("/posts", postController.postGetAllAction);
    app.get("/posts/:id", postController.postGetByIdAction);
    app.post("/posts", postController.postSaveAction);
  
    console.log("Express application is up and running on port 3000");

}).catch(error => {
    console.log("TypeORM connection error: ", error)
});


export default app;