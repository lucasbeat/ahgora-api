const express = require('express');
const moment = require("moment");
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Running on: ${port}`));

app.get('/', async (req, res) => {
    res.json({status: 'Ready!'});
})

app.get('/pausas', async (req, res) => {
    const agent = req.params.pausa;
    const query = db.collection('Pausas').where('name', '==', agent);
    const querySnapshot = await query.get();
    if (querySnapshot.size > 0) {
        res.json(querySnapshot.docs[0].data());
    } else {
        res.json({status: 'Not Found!'});
    }
})

app.post('/pausa', async (req, res) => {
    const data = {
        id: 1,
        agent: req.body.agent,
        reason: req.body.reason.value,
        date: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
    };
    console.log(data);
    res.json(data)
})

app.put('/pausa/:id', async (req, res) => {
    const data = {
        agent: req.body.agent,
        reason: req.body.reason.value,
        date_1: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
        date_2: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
    };
    console.log(data);
    res.json(data)
})