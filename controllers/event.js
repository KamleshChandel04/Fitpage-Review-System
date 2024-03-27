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

const handleRegisterEvent = async (req, res) => {
    try {
        const id = req.params.id;

        const event = await Event.findById(id);
        const index = event.registerUser.findIndex((id) => id === String(req.user._id));

        if (index === -1) {
            event.registerUser.push(String(req.user._id));
        } else {
            event.registerUser = event.registerUser.filter((id) => id !== String(req.user._id));
        }
        const updatedEvent = await Event.findByIdAndUpdate(id, event, { new: true });
        return res.status(201).redirect("/");
    } catch (error) {
        console.log(error);
        return res.status(400).redirect("/");
    }
};

const handleLikeReview = async (req, res) => {
    const id = req.params.id;
    try {
        const review = await Review.findById(id);
        const index = review.likes.findIndex((id) => id === String(req.user._id));

        if (index === -1) {
            review.likes.push(String(req.user._id));
        } else {
            review.likes = review.likes.filter((id) => id !== String(req.user._id));
        }
        const updatedReview = await Review.findByIdAndUpdate(id, review, { new: true });
        return res.status(201).redirect(`/event/${review.eventId}`);
    } catch (error) {
        console.log(error);
        return res.status(400).redirect("/");
    }
};

const handleReportReview = async (req, res) => {
    const id = req.params.id;

    try {
        const review = await Review.findById(id);
        const index = review.reports.findIndex((id) => id === String(req.user._id));

        if (index === -1) {
            review.reports.push(String(req.user._id));
        } else {
            review.reports = review.reports.filter((id) => id !== String(req.user._id));
        }
        const updatedReview = await Review.findByIdAndUpdate(id, review, { new: true });

        return res.status(201).redirect(`/event/${review.eventId}`);
    } catch (error) {
        console.log(error);
        return res.status(400).redirect("/");
    }
};

const handleResponseReview = async (req, res) => {
    const id = req.params.id;
    
    try {
        const review = await Review.findById(id);
        const {organizerResponse} = req.body;
        review.organizerResponse.push(organizerResponse);
        const updateReview = await Review.findByIdAndUpdate(id , review , {new : true});
  
        return res.status(201).redirect(`/event/${review.eventId}`);
    } catch (error) {
        console.log(error);
        return res.status(400).redirect("/");
    }
};

module.exports = {
    handleCreateEvent,
    handleGetEvent,
    handleCreateReview,
    handleDeleteEvent,
    handleRegisterEvent,
    handleLikeReview,
    handleReportReview,
    handleResponseReview,
};
