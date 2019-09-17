let express = require('express');   
let app = express();
let PORT = 8000
let html = require('./app/routes/htmlRoutes')
let api = require('./app/routes/apiRoutes');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


html(app);
api(app)


app.listen(PORT, ()=>{
    console.log('app is listening on port: ' + PORT)
})