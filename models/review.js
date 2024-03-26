const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
    {
        eventId: {
            type: Schema.Types.ObjectId,
            ref: "event",
        },
        content: {
            type: String,
            required: true,
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
            type: Number,
            default: 0,
        },
        reports: {
            type: Number,
            default: 0,
        },
        reported: {
            type: Boolean,
            default: false,
        },
        organizerResponse: {
            type: String,
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
