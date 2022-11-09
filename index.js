const express = require('express')
const app = express()
const port = 5000

// set view engine 
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.render('home.ejs')
})


app.listen(port, () => console.log(`server running at port ${port}`))