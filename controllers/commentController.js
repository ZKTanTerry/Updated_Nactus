"use strict";
const CommentsDB = require('../models/CommentsDB');
const Comment = require('../models/Comments');

var commentsDB = new CommentsDB();

function getCommentsFromMaterial(request, respond){
    commentsDB.getCommentsFromMaterial(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}

function addComment(request, respond){
    var now = new Date();
    var comments = new Comment(null, request.body.notes_id, request.body.assessment_id, request.body.review, request.body.rating, now, request.body.video_id);
    commentsDB.addComment(comments, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
};

function updateComment(request, respond){
    var now = new Date();
    var comment = new Comment(parseInt(request.params.comments_id), request.body.notes_id, request.body.assessment_id, request.body.review, request.body.rating, now, request.body.video_id);
    commentsDB.updateComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteComment(request, respond){
    var commentID = request.params.comments_id;
    commentsDB.deleteComment(commentID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getCommentsFromMaterial, addComment, updateComment, deleteComment};