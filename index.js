const express = require('express');
const moment = require("moment");
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Running on: ${port}`));

app.post('/pause', async (req, res) => {
    console.log(req.body);
    res.json({status: 'Received!'});
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

app.patch('/pausa/:id', async (req, res) => {
    console.log(req.body);
    res.json({"message": req.body })
});