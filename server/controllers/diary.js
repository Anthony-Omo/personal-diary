const Diary = require('../models/Diary');

async function index(req, res) {
    try {
        const diary_entries = await Diary.getAll();
        res.status(200).json(diary_entries);
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const snack = await Diary.getById(id);
    res.status(200).json(diary_entries);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

module.exports = {index}