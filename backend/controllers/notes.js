// Models
const Note = require('../models/note');

exports.getNote = (req, res, next) => {
  Note.findById(req.params.id)
    .then(note => {
      if (note) {
        console.log('GET NOTE: SUCCESS\n')

        res.status(200).json({
          message: 'Get Note: Success',
          note
        });
      } else {
        console.log('GET NOTE: RESOURCE NOTE FOUND\n')

        res.status(404).json({
          message: 'Get Note: Note not found!'
        });
      }
    }).catch(error => {
    res.status(500).json({
      message: 'GET NOTE: FAILED'
    });
  });
};

exports.getNotes = (req, res, next) => {
  Note.find()
    .then(notes => {
        console.log('GET ALL NOTES: SUCCESS\n')

        const clientReadyNotes = notes.map(note => {
          return {
            id: note._id,
            title: note.title,
            content: note.content
          }
        });

        res.status(200).json({
          message: 'Get All Notes: Success',
          notes: clientReadyNotes
        });
      }
    )
    .catch(error => {
      console.log('GET ALL NOTES: FAILED\n')

      res.status(500).json({
        message: 'Get All Notes: Failed'
      });
    });
};

exports.putNote = (req, res, next) => {


  const newNote = new Note({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Note.updateOne({ _id: newNote._id }, newNote)
    .then(result => {
      if (result.nModified > 0) {
        console.log('PUT NOTE: SUCCESS\n');
        res.status(200).json({
          message: 'Update Note: Success',
          note: newNote
        });
      } else {
        res.status(404).json({
          message: 'Update Note: Note not found!'
        });
      }
    }).catch(error => {
    console.log('PUT NOTE: FAILED\n')

    res.status(500).json({
      message: 'Update Note: Failed'
    });
  });
  ;
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

exports.deleteNote = (req, res, next) => {
  Note.deleteOne({_id: req.params.id})
    .then(result => {
      if (result.n > 0) {
        console.log('DELETE POST: SUCCESS\n');

        res.status(200).json({
          message: 'Delete Post: ' + req.params.id + ' successfully deleted'
        });
      } else {
        res.status(404).json({message: 'Delete Post: Post not found!'});
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Delete Note: Failed',
        error
      });
    });
};
