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
  route: '/iPad/',
  title: 'iPad',
  image: '/ipad.jpeg',
  specs: 'Liquid Retina display, 11-inch (diagonal) LED-backlit Multi‑Touch display with IPS technology,       2388-by-1668-pixel resolution at 264 pixels per inch (ppi),       ProMotion technology,       Wide color display (P3),       True Tone display,       Fingerprint-resistant oleophobic coating,       Fully laminated display,       Antireflective coating,       1.8% reflectivity,       600 nits brightness'
})
createArticle({
  route: '/iPhone/',
  title: 'iPhone',
  image: '/iphone.jpeg',
  specs: 'Retina HD display 4.7-inch (diagonal) widescreen LCD Multi-Touch display with IPS technology 1334-by-750-pixel resolution at 326 ppi 1400:1 contrast ratio (typical)'
})
createArticle({
  route: '/iMac/',
  title: 'iMac',
  image: '/imac.jpeg',
  specs: '2.3GHz Dual-Core Processor with Turbo Boost up to 3.6GHz 1TB Storage  2.3GHz dual-core 7th-generation Intel Core i5 processor  Turbo Boost up to 3.6GHz  8GB 2133MHz memory, configurable to 16GB  1TB hard drive1  Intel Iris Plus Graphics 640  Two Thunderbolt 3 ports  1920-by-1080 sRGB display'
})

app.get('/iPhone', function (request, response) {
  response.render('pages/product', {
    articles: articles,
    product: articles[1]
  })
})

app.get('/iMac', function (request, response) {
  response.render('pages/product', {
    articles: articles,
    product: articles[2]
  })
})
app.get('/iPad', function (request, response) {
  response.render('pages/product', {
    articles: articles,
    product: articles[0]
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
