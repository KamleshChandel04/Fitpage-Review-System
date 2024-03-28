const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
    {
        eventId: {
            type: Schema.Types.ObjectId,
            ref: "event",
        },
        content: {
            type: String,
        },
        registrationRating: {
            type: Number,
            default : 0,
        },
        eventRating: {
            type: Number,
            default : 0,
        },
        breakfastRating: {
            type: Number,
            default : 0,
        },
        overallRating: {
            type: Number,
            default : 0,
            
        },
        likes: {
            type: [String],
            default: [],
            ref: "user",
        },
        reports: {
            type: [String],
            default: [],
            ref: "user",
        },
        reported: {
            type: Boolean,
            default: false,
        },
        organizerResponse: {
            type: [String],
            default : [],
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    { timestamps: true }
);

const Review = model("review", reviewSchema);
module.exports = Review;
