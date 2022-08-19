"use strict";

var db = require('../db-connections');
class NoteDB{
    getAllNotes(callback){
        var sql = "SELECT * FROM nactus.notes";
        db.query(sql, callback);
    }
    
    getNotesFromSubject(subject, callback){
        var sql = "SELECT * FROM nactus.notes WHERE subject LIKE ?";
        return db.query(sql, [subject + "%"], callback);
    }

}

module.exports = NoteDB;