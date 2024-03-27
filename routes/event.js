const express = require('express');
const router = express.Router();
const {handleCreateEvent , handleGetEvent , handleCreateReview , handleDeleteEvent , handleRegisterEvent , handleLikeReview , handleReportReview , handleResponseReview} = require('../controllers/event');

router.get("/add-new", (req, res) => {
    return res.render("addEvent", {
        user: req.user,
    });
});

router.post("/", handleCreateEvent);
router.get("/:id", handleGetEvent);
router.get("/register/:id", handleRegisterEvent);
router.get("/delete/:id", handleDeleteEvent);

// ------Reviews--------
router.post('/review/:eventId' , handleCreateReview);
router.get('/review/like/:id' , handleLikeReview);
router.get('/review/report/:id' , handleReportReview);
router.post('/review/response/:id' , handleResponseReview);


module.exports = router;