const db = require("../models")

// Exporting API routes
module.exports = function(app) {

// Read all documents from the database.
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            })
            .catch(err => {
            res.json(err);
            });
});

// Create a Workout Document
app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})
    
// Update (add) exercises to the workout document.
app.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id);
    db.Workout.update(
        {
            _id: req.params.id
        },
        {
            $push:
            { exercises: 
                {
                type: req.body.type,
                name: req.body.name,
                duration: req.body.duration,
                weight: req.body.weight,
                reps: req.body.reps,
                sets: req.body.sets,
                distance: req.body.distance
                }
            }
        })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        })
})

// Read the last 7 documents (Workouts) from the collection to be displayed in the "stats.html" page
app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7)
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.json(err);
        });
});
}