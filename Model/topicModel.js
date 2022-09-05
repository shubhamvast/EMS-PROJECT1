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
const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)

function validateTopic(topic){
    const schema = Joi.object({
        name: Joi.string().min(4).max(255).required(),
        subject: Joi.objectId()
    });

    return schema.validate(topic);
}


module.exports = {Topic,topicSchema,validateTopic};