let express = require('express');   
let app = express();
let PORT = 8000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, ()=>{
    console.log('app is listening on port: ' + PORT)
})