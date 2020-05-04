// Models
const Note = require('../models/note');

exports.getNotes = (req, res, next) => {
  Note.find()
    .then(notes => {
        console.log('GET ALL NOTE: SUCCESS\n')

        const clientReadyNotes = notes.map(note => {
          return {
            id: note._id,
            title: note.title,
            content: note.content
          }
        });

        res.status(200).json({
          message: 'Get All Notes: Success',
          notes
        });
      }
    )
    .catch(error => {
      console.log('GET ALL NOTE: FAILED\n')

      res.status(500).json({
        message: 'Get All Notes: Failed'
      });
    });
};

exports.postNote = (req, res, next) => {
  // Declare note and its variables to save to db
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });

  note.save()
    .then((createdNote) => {
      console.log('CREATE NOTE: SUCCESS\n')

      res.status(201).json({
        message: 'Create Note: Success',
        note: {
          id: createdNote._id,
          title: createdNote.title,
          content: createdNote.content,
        },
        error: null
      });
    })
    .catch(error => {
      console.log('CREATE NOTE: FAILED\n')

      res.status(500).json({
        message: 'Create Note: Failed',
        error
      });
    });
};
