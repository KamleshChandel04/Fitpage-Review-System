const express = require("express");
const router = express.Router();
const {
    handleCreateEvent,
    handleGetEvent,
    handleDeleteEvent,
    handleRegisterEvent,
} = require("../controllers/event");

router.get("/add-new", (req, res) => {
    return res.render("addEvent", {
        user: req.user,
    });
});

router.post("/", handleCreateEvent);
router.get("/:id", handleGetEvent);
router.get("/register/:id", handleRegisterEvent);
router.get("/delete/:id", handleDeleteEvent);

module.exports = router;
