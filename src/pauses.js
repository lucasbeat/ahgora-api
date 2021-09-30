const Interval = require('./models/Interval')

const saveInterval = async (req, res) => {
    const { pause } = req.body;
    const savePause = await Interval.create({ pause });
    return result ? 
        res.status(200).json({ message: 'Pausa Inserida ' }) : 
        res.status(403).json({ message: 'Problema pra salvar a pausa ' });
}

export default saveInterval;