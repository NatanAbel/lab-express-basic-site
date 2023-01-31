const express = require('express');
const app = express();
const PORT = 3000
app.use(express.static('public'));

app.get('/', (req, res) => {
    try{
        res.sendFile(__dirname + '/views/home.html')
    }catch(err){
        console.log(err);
    }
})
app.get('/about', (req, res) => {
    try{
        res.sendFile(__dirname + '/views/about.html')
    }catch(err){
        console.log(err);
    }
})
app.get('/works', (req, res) => {
    try{
        res.sendFile(__dirname + '/views/works.html')
    }catch(err){
        console.log(err);
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port${PORT} `);
})