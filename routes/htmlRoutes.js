module.exports = function(app) {

// GET method route

// loads index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index')
})

// loads exercise.html
app.get('/exercise', function (req, res) {
    res.sendFile(__dirname + '/public/exercise')
})

// loads stats.html
app.get('/stats', function (req, res) {
    res.sendFile(__dirname + '/public/stats')
})

}
