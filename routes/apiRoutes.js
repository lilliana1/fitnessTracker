const db = require("../models")

// Exporting API routes
module.exports = function(app) {

// Read all documents from the database.
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, err, data)
    if (err)
    {
        res.send(err)
    } else {
        res.json(data)
    }
});

// Create a Workout Document
app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body, (err, data))
    if (err) {
        res.send(err)
    } else {
        res.send(data)
    }
    

// Update (add) exercises to the workout document.
app.post("/api/workouts/:id", (req, res) => {
    db.Workout.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set:
            {
                type: req.body.type,
                name: req.body.name,
                duration: req.body.duration,
                weight: req.body.weight,
                reps: req.body.reps,
                sets: req.body.sets,
                distance: req.body.distance
            }
        },
        (err, data) =>
        {
            if (err)
            {
                res.send(err);
            } else {
                res.send(data);
            }
        }
    );

// Read the last 7 documents (Workouts) from the collection to be displayed in the "stats.html" page
 app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err)
        {
            res.send(err);
        } else {
            res.json(data);
        }
    }).limit(7);
});

});

});

}