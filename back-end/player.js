const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    name: String,
    teammates: [String]
})

module.exports = mongoose.model("Player", playerSchema)