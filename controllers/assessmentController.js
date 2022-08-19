"use strict";
const AssessmentDB = require('../models/AssessmentDB');
const Assessment = require('../models/Assessment');

var assessmentDB = new AssessmentDB();

function getAllAssessment(request, respond){
    assessmentDB.getAllAssessment(function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAssessmentFromSubject(request, respond){
    var subject = request.params.subject
    assessmentDB.getAssessmentFromSubject(subject, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getAssessmentFromLevel(request, respond){
    var level = request.params.level
    assessmentDB.getAssessmentFromLevel(level, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllAssessment, getAssessmentFromSubject, getAssessmentFromLevel};