let data = require('../data/friends')

let api = (app)=>{
    app.get('/api/friends', (req, res)=>{
        res.json(data)
    })
    app.post('/api/friends', (req, res)=>{
        data.push(req.body)
    })
    var bestFriendIndex = 0;
    var minimumDifference = 40;
}



module.exports = api