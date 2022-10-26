const mongoose = require('mongoose')
const CurseSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
})

const CurseModel = mongoose.model('Curse', CurseSchema)
module.exports = CurseModel