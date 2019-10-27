const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors= require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist', 'service-demo')))

app.get('/places/:id', (req, res) => {
    const pla = req.params.id;
    var googleUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCMOROAoinPqLpMBxqJPN8xKjpckbvF_uc&query=restaurants+in+';
    request.get(googleUrl + pla)
    .pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))