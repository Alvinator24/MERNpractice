const express = require("express");

const Schedule = require("../models/ScheduleModel");

const router = express.Router();

const MyMiddleware = require("../server.js");

// GET all schedules
router.get("/", (req, res) => {
    res.json({mssg: "GET all schedules"});
})

// GET a single schedule
router.get("/:id", (req, res) => {
    res.json({mssg: "GET a single schedule"});
});

// POST a new schedule
router.post("/", async (req, res) => {
    const {courseCode, section, hall, classroom, startTime, endTime, days, professor} = req.body;
    try {
      const schedule = await Schedule.create({courseCode, section, hall, classroom, startTime, endTime, days, professor}); 
      res.status(200).json(schedule);
    } catch(error){
      res.status(400).json({error: error.message});
    };
});

// DELETE a schedule
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a new schedule"});
});

// UPDATE a schedule
router.patch("/:id", (req, res) => {
    res.json({mssg: "UPDATE a new schedule"});
});

module.exports = router;