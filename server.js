var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {
}
function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}
createArticle({
  title: 'Squirrel escapes squirrel prison, now at large!',
  content: 'Yesterday evening at 7:47PM, the criminal squirrel Rabid Rabindra got out of his cage.'
})
createArticle({
  title: 'Squirrel lured back into prison with peanut butter',
  content: 'This morning at 10:13PM, the smell of peanut butter drew Rabid Rabindra the squirrel back into his cage.'
})

app.get('/iPhone', function (request, response) {
  response.render('pages/iPhone', {
    articles: articles
  })
})

app.get('/iMac', function (request, response) {
  response.render('pages/iMac', {
    articles: articles
  })
})
app.get('/iPad', function (request, response) {
  response.render('pages/iPad', {
    articles: articles
  })
})
app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(port)
