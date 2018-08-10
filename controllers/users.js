module.exports.controller = (app) => {
    app.get('/users', (req, res) => {
        res.render('users', {title: 'Users', description: 'This is the description of all the users'}); //this uses Users.pug file to render
    })
}