import * as express from 'express';
import * as mongo from 'mongoose';
import * as bodyParser from 'body-parser';
import { join } from 'path';

const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const port = 3000;
 
app.get("/", (req, res) => {
 res.send("Hello World");
});
const autoRoutes = require('express-auto-routes')(app); // you don't need `routes` folder any more
autoRoutes(join(__dirname, './controllers')); // auto mounting... done!
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});






// import * as express from 'express';
// import * as cors from 'cors';
// import * as mongo from 'mongoose';
// import * as bodyParser from 'body-parser';
// import { join } from 'path';

// const uri: string = "mongodb://127.0.0.1:27017/qna";

// mongo.connect(uri, { useNewUrlParser: true }, (err: any) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log("Succesfully Connected!");
//     }
// });

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.set('port', process.env.PORT || 3000);
// // app.get('/');
// const autoRoutes = require('express-auto-routes')(app); // you don't need `routes` folder any more
// autoRoutes(join(__dirname, './controllers')); // auto mounting... done!

// const server = app.listen(app.get('port'), () => {
//     console.log('Node is running http://localhost:%d', app.get('port'));
// });


// app.use(express.static('coverage'))

// module.exports = { app: app, server: server };