exports = module.exports = function initRoute(app, path, pathString) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(pathString,'index.html'));
    })
    app.get('/match', (req, res) => {
        res.sendFile(path.join(pathString, 'index.html'));
    })
}