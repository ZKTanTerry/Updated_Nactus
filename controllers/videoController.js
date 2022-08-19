"use strict";
const VideoDB = require('../models/VideoDB');
const Video = require('../models/Video');

var videoDB = new VideoDB();

function getAllVideos(request, respond){
    videoDB.getAllVideos(function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getVideosFromSubject(request, respond){
    var subject = request.params.subject
    videoDB.getVideosFromSubject(subject, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllVideos, getVideosFromSubject};