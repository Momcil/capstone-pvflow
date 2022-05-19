const express = require('express');
const app = express();
const Project = require('./models/projects');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 4500;
const { MONGODB_URL } = process.env;

const WorkHours = require('./models/workHoursModel');

mongoose.connect(MONGODB_URL).then(() => {
    console.log('Server Connected to MongoDb');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.json());

app.get('/', (req, res, next) => {
    Project.find('/').then(pr => (res.status(200).json(pr), console.log(pr)));
});
app.get('/allProjects', (req, res) => {
    Project.find({}).then(pr => (res.status(200).json(pr), console.log(pr)));
});

app.get('/update', (req, res) => {
    WorkHours.find({}).then(pr => (res.status(200).json(pr), console.log(pr)));
});

app.post('/allProjects', (req, res, next) => {
    const ID = req.body.ID;
    const project_name = req.body.project_name;
    const client = req.body.client;
    const status = req.body.status;
    const employee_name = req.body.employee_name;
    const work_hours = req.body.work_hours;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const sum_hours = req.body.sum_hours;
    const in_detail = req.body.in_detail;

    const newProject = new Project({
        ID,
        project_name,
        client,
        status,
        employee_name,
        work_hours,
        start_date,
        end_date,
        sum_hours,
        in_detail,
    });
    newProject
        .save()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            next(err);
        });
});

app.delete('/allProjects/:projectId', (req, res, next) => {
    const id = req.params.projectId;
    Project.findByIdAndDelete(id)
        .then(data => {
            res.status(201).end();
        })
        .catch(err => {
            next(err);
        });
});

app.post('/update', (req, res, next) => {
    const workinkg_hours = req.body.working_hours;
    const project_id = req.body.project_id;
    const date = req.body.date;
    const employee_name = req.body.employee_name;

    const NewWorkhours = new WorkHours({ workinkg_hours, project_id, date, employee_name });
    NewWorkhours.save()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            next(err);
        });
});
