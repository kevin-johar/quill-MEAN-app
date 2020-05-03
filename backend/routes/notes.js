const express = require('express');
const router = express.Router();
const NotesController = require('../controllers/notes');

// GET: ALL NOTES
router.get('', NotesController.getNotes);

// POST: NOTE
router.post('', NotesController.postNote);

module.exports = router;
