const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const router = require('./routes/routes');

class App {

load() {
app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
app.use(router);





let port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log("connecting"+port);
    
})
}
}
module.exports = App;