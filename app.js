const express = require('express');
const path = require('path');
const port = 3000
const app = express();

app.use(express.static('./content',))





app.get('/', (req,res) => {
    let absolute = path.join(__dirname, './views/home/index.html');
    res.sendFile(absolute);
})
app.get('/addBreed', (req,res) => {
    let absolute = path.join(__dirname, './views/addBreed.html');
    res.sendFile(absolute);
})
app.get('/addCat', (req,res) => {
    let absolute = path.join(__dirname, './views/addCat.html');
    res.sendFile(absolute);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
