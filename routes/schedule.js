const express = require("express");

const { 
    getAllSchedules,
    getSingleSchedule,
    createSchedule,
    deleteSchedule,
    updateSchedule
} = require("../controllers/ScheduleController");

const router = express.Router();

const MyMiddleware = require("../server.js");

// GET all schedules
router.get("/", getAllSchedules);

// GET a single schedule
router.get("/:id", getSingleSchedule);

// POST a new schedule
router.post("/", createSchedule);

// DELETE a schedule
router.delete("/:id", deleteSchedule);

// UPDATE a schedule
router.patch("/:id", updateSchedule);

module.exports = router;