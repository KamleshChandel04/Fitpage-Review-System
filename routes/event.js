const express = require('express');
const router = express.Router();
const {handleCreateEvent , handleGetEvent , handleCreateReview , handleDeleteEvent} = require('../controllers/event');

router.get("/add-new", (req, res) => {
    return res.render("addEvent", {
        user: req.user,
    });
});

router.post("/", handleCreateEvent);
router.get("/:id", handleGetEvent);

// ------Reviews--------
router.post('/review/:eventId' , handleCreateReview);

router.get("/delete/:id", handleDeleteEvent);

module.exports = router;