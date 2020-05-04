const express = require('express');
const router = express.Router();
const NotesController = require('../controllers/notes');

// GET: ALL NOTES
router.get('', NotesController.getNotes);

// GET: SINGLE NOTE
router.get('/:id', NotesController.getNote);

// PUT: NOTE
router.put('/:id', NotesController.putNote);

// POST: NOTE
router.post('', NotesController.postNote);

// DELETE: Note
router.delete('/:id', NotesController.deleteNote);

module.exports = router;
