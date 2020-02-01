module.exports = function(app) {

// GET method route
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index')
})

app.get('/exercise', function (req, res) {
    res.sendFile(__dirname + '/public/exercise')
})

app.get('/stats', function (req, res) {
    res.sendFile(__dirname + '/public/stats')
})

}
