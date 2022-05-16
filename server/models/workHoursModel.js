
const mongoose = require("mongoose")
const workHoursShcema = mongoose.Shchema({
        workink_hours: Number,
       project_id: Number,
       employee_name: String
    })

    module.exports = mongoose.model("workHours", workHoursShcema)
//----------------------------

