const router = require('express').Router();
//uuid package grants unique id to each saved note in the note taker
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// GET /api/notes should read the db.json file and return all saved notes as JSON.
router.get('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    return res.json(notes);
});

// POST /api/notes should receive a new note to save on the request body, add it to the 
// db.json file, and then return the new note to the client.
router.post('/notes', (req,res) => {
    let newNote = req.body;
    //new note is posted with a respective id with the uuid package from npm
    newNote.id = uuidv4();

    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    notes.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));

    return res.json(notes);
});

// add the DELETE route to the application - DELETE /api/notes/:id should receive a query parameter 
// containing the id of a note to delete. In order to delete a note, you'll need to read all notes 
// from the db.json file, remove the note with the given id property, and then rewrite the notes 
// to the db.json file.

router.delete('/notes/:id', (req, res) => {

    let deleteNote = req.params.id;
    //creates arr from db.json file and also establishes arr 2 without deleteFile
    let arr = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    let arr2 = arr.filter((file) => file.id !== deleteNote);
    //json file is rewritten with arr 2 and file is then returned without the now deleted note
    fs.writeFileSync('./db/db.json', JSON.stringify(arr2));

    return res.json(arr2);

});


module.exports = router;