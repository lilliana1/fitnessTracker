module.exports = function(app) {

// GET method route

// loads index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + './public/index.html')
})

// loads exercise.html
app.get('/exercise', function (req, res) {
    res.sendFile(__dirname + './public/exercise.html')
})

// loads stats.html
app.get('/stats', function (req, res) {
    res.sendFile(__dirname + './public/stats.html')
})

}
