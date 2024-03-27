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
        },
        eventRating: {
            type: Number,
        },
        breakfastRating: {
            type: Number,
        },
        overallRating: {
            type: Number,
            
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
