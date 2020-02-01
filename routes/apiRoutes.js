const db = require("../models")

module.exports = function(app) {



app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbData => {
        console.log(dbData);
        res.json(dbData);
    })
    .catch(err => {
        res.json(err)
    });
});

app.post("/api/workouts", ({body}, res) => {
db.Workout.create(body)
    .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    .then(dbLibrary => {
    res.json(dbLibrary);
    })
    .catch(err => {
    res.json(err);
    });
});

// app.get("/books", (req, res) => {
// db.Book.find({})
//   .then(dbBook => {
//     res.json(dbBook);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// db.Library.create({ name: "Campus Library" })
// .then(dbLibrary => {
//   console.log(dbLibrary);
// })
// .catch(({message}) => {
//   console.log(message);
// });

// app.post("/submit", ({body}, res) => {
// db.Book.create(body)
//   .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/books", (req, res) => {
// db.Book.find({})
//   .then(dbBook => {
//     res.json(dbBook);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/library", (req, res) => {
// db.Library.find({})
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.get("/populated", (req, res) => {
// db.Library.find({})
//   .populate("books")
//   .then(dbLibrary => {
//     res.json(dbLibrary);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });
}