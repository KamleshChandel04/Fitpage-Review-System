const Event = require("../models/event");
const Review = require("../models/review");

const handleCreateEvent = async (req, res) => {
    const { title, body } = req.body;
    try {
        const event = await Event.create({
            title,
            body,
            createdBy: req.user._id,
        });
        return res.redirect(`/event/${event._id}`);
    } catch (error) {
        return res.render("addEvent", { user: req.user, error: "All fields are mandatory" });
    }
};

const handleGetEvent = async (req, res) => {
    const event = await Event.findById(req.params.id).populate("createdBy");
    const reviews = await Review.find({ eventId: req.params.id }).populate("createdBy");
    return res.render("event", {
        user: req.user,
        event,
        reviews,
    });
};

const handleCreateReview = async (req, res) => {
    try {
        await Review.create({
            eventId: req.params.eventId,
            content: req.body.content,
            registrationRating: req.body.registrationRating,
            eventRating: req.body.eventRating,
            breakfastRating: req.body.breakfastRating,
            overallRating: req.body.overallRating,
            createdBy: req.user._id,
        });
        return res.status(201).redirect(`/event/${req.params.eventId}`);
    } catch (error) {
        return res.status(400).redirect(`/event/${req.params.eventId}`);
    }
};

const handleDeleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        return res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { handleCreateEvent, handleGetEvent, handleCreateReview, handleDeleteEvent };
