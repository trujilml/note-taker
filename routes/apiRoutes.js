const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    return res.json(notes);
});

router.post('/notes', (req,res) => {
    let newNote = req.body;

    newNote.id = uuidv4();

    
});


router.delete('/notes:id', (req, res) => {

});


// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, add it to 
// the db.json file, and then return the new note to the client. You'll need to find 
// a way to give each note a unique id when it's saved (look into npm packages that 
//     could do this for you).

// Bonus
// You haven’t learned how to handle DELETE requests, but this application has that functionality in
//  the front end. As a bonus, see if you can add the DELETE route to the application using the 
//  following guideline:

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
// In order to delete a note, you'll need to read all notes from the db.json file, remove the note 
// with the given id property, and then rewrite the notes to the db.json file.

module.exports = router;