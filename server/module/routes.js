exports = module.exports = function initRoute(app) {
    app.get('/', (req, res) => {
        res.send('Hello World 1')
      })
      
}