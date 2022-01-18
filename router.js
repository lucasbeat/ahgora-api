const router = require("express").Router();
const { saveInterval, editInterval, deleteAll, getPauses } = require('./src/pauses')

router.post('/pause', saveInterval)

router.patch('/pause/:id', editInterval)

router.delete('/deleteEverything', deleteAll)

router.get('/pauses', getPauses)

module.exports = router;