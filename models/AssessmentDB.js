"use strict";

var db = require('../db-connections');

class AssessmentDB{
    getAllAssessment(callback){
        var sql = "SELECT * FROM nactus.assessment";
        db.query(sql, callback);
    }
    
    getAssessmentFromSubject(subject, callback){
        var sql = "SELECT * FROM nactus.assessment WHERE subject LIKE ?";
        return db.query(sql, [subject + "%"], callback);
    }

    getAssessmentFromLevel(level, callback){
        var sql = "SELECT * FROM nactus.assessment WHERE level LIKE ?";
        return db.query(sql, [level + "%"], callback);
    }

}

module.exports = AssessmentDB;