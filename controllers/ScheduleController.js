const Schedule = require("../models/ScheduleModel");

const mongoose = require("mongoose");

// GET all schedules
const getAllSchedules = async (req, res) => {
    const schedules = await Schedule.find({}).sort({ createdAt: -1 });
    res.status(200).json(schedules);
};

// GET a single schedules
const getSingleSchedule = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such schedule"})
    }
    const schedule = await Schedule.findById(id);
    if (!schedule) {
        return res.status(404).json({error: "No such schedule"});
    }
    res.status(200).json(schedule);
};

// CREATE a new schedule
const createSchedule = async (req, res) => {
    const {courseCode, section, hall, classroom, startTime, endTime, days, professor} = req.body;
    try {
      const schedule = await Schedule.create({courseCode, section, hall, classroom, startTime, endTime, days, professor}); 
      res.status(200).json(schedule);
    } catch(error){
      res.status(400).json({error: error.message});
    };
};

// DELETE a schedule
const deleteSchedule = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such schedule"})
    }
    const schedule = await Schedule.findOneAndDelete({_id: id});
    if (!schedule) {
        return res.status(404).json({error: "No such schedule"});
    }
    res.status(200).json(schedule);
};

// UPDATE a schedule
const updateSchedule = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such schedule"})
    }
    const schedule = await Schedule.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if (!schedule) {
        return res.status(404).json({error: "No such schedule"});
    }
    res.status(200).json(schedule);
};

module.exports = {
    getAllSchedules,
    getSingleSchedule,
    createSchedule,
    deleteSchedule,
    updateSchedule
};