const mongoose = require("mongoose");


const topicSchema = new mongoose.Schema({
    name:{
        type: String,
        minLength:[4,"minimum length of topic is 4"],
        maxLength:[255,"maximum length of topic is 255"],
        required:true
    },
    subject:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }

})

const Topic = mongoose.model("topic",topicSchema);


module.exports = {Topic}