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
    const diary_entry = await Diary.getById(id);
    res.status(200).json(diary_entry);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}


async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const diary_entry = await Diary.getById(id);
    const result = await diary_entry.update(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}




async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const diary_entry = await Diary.getById(id);
    const result = await diary_entry.destroy();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

module.exports = {index, show, destroy, update}