const express = require('express')
const app = express()
const port = 3000


app.set('view engine','ejs')

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = "My Home Page";
   var heading = "My Website";
  // res.send('Ola from express!')
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})

app.get('/fifa', (req, res) => {
  var title = "Fifa 22 is my fravorite video game";
  var heading = "My Website"
  // res.send('Ola from express!')
    res.render('pages/fifa',{
    'title':title,
    'heading':heading
  })
})

app.get('/nba', (req, res) => {
  var title = "NBA 2K22 is my fravorite video game";
  var heading = "My Website"
  // res.send('Ola from express!')
    res.render('pages/nba',{
    'title':title,
    'heading':heading
  })
})

app.get('/bo2', (req, res) => {
  var title = "Black ops 2 is my fravorite video game";
  var heading = "My Website"
  // res.send('Ola from express!')
    res.render('pages/bo2',{
    'title':title,
    'heading':heading
  })
})

app.get('/ac', (req, res) => {
  var title = " Assassin's Creed Brotherhood is my fravorite video game";
  var heading = "My Website"
  // res.send('Ola from express!')
    res.render('pages/ac',{
    'title':title,
    'heading':heading
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
