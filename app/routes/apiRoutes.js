let data = require('../data/friends')


let api = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(data)
    })
    app.post('/api/friends', (req, res) => {
        let bestFriendIndex = 0 
        let totaldifference = 200
        // for (var x = 0; x < data.length; x++) {
        //     let difference = 0
        //     for (var i = 0; i < req.body.scores.length; i++) {
        //         difference += Math.abs(data[x].scores[i] - parseInt(req.body.scores[i]))
        //     }
        //     if (difference < totaldifference) {
        //         totaldifference = difference;
        //         bestFriendIndex = x
        //     }
        //     console.log(totaldifference)
        // }

        data.forEach((item, index) => {
            let difference = 0
            
            console.log('totaldifference:' + totaldifference)
            console.log(`index is ${index}`)
            for (var x = 0; x < req.body.scores[x].length; x++) {
                difference += Math.abs(data[index].scores[x] - parseInt(req.body.scores[x]))
            }
            if (difference < totaldifference) {
                totaldifference = difference;
                console.log(`if statement = index is ${index}`)
                bestFriendIndex = index
                console.log(`best friend ${bestFriendIndex}`)
            }
        })

        data.push(req.body)
        res.json(data[bestFriendIndex])
    })



}



module.exports = api