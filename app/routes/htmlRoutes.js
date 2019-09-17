let path = require('path');

let routes = (app)=>{
app.get('/survey', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/survey.html'))
});
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/home.html'))
})
}




module.exports = routes