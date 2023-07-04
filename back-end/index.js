const mongoose = require('mongoose')
const Player = require("./player")

mongoose.connect("mongodb://localhost/playmakerdb")

run()
async function run() {
    try{
        const user = await Player.findOne()
        console.log(user)
    }catch(e) {
        console.log(e.message)
    }
}
