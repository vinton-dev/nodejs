const express=require('express');
const app = express()

app.get('/', (req,res) => {
    res.send('Hello')
})


app.get('/help', (req,res) => {
    res.send('Help Page')
})

app.get('/about', (req,res) => {
    res.send('About Page')
})







app.listen(3000,()=>{
        console.log('Server listening on port 3000')
})