const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        date: {
            type : Date,
            required : true,
        },
        time :{
            type : String,
            required : true,
        },

        venue : {
            type : String,
            required : true,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        registerUser: {
            type: [String],
            default: [],
            ref: "user",
        },
    },
    { timestamps: true }
);

const Event = model("event", eventSchema);
module.exports = Event;
