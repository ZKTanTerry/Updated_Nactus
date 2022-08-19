"use strict";
const NoteDB = require('../models/NoteDB');
const Note = require('../models/Note');

var noteDB = new NoteDB();

function getAllNotes(request, respond){
    noteDB.getAllNotes(function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getNotesFromSubject(request, respond){
    var subject = request.params.subject
    noteDB.getNotesFromSubject(subject, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllNotes, getNotesFromSubject};