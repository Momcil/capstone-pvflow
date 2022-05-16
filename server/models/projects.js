const mongoose = require("mongoose")

const projectsSchema = mongoose.Schema({
    ID: { type: Number, default: 0 },
    project_name: { type: String, require: true},
    client: { type: String, required: true },
    status: { type: String, require: true },
    employee: [{
      name: String,
      work_hours: Number
    }],
    work_hours: {type: Number, default: 0 },
    start_date: { type: Date },
    end_date: { type: Date },
    sum_hours: { type: Number, default: 0 },
    in_detail: { type: Boolean }
  })

  module.exports = mongoose.model("users", projectsSchema)