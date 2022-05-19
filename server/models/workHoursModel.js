const mongoose = require('mongoose');
const workHoursScheema = mongoose.Schema({
    workinkg_hours: Number,
    project_id: Number,
    employee_name: String,
    date: Date,
});

module.exports = new mongoose.model('work_Hours', workHoursScheema);
