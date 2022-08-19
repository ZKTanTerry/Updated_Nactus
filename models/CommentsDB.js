"use strict";

var db = require('../db-connections');
class CommentsDB{
    getCommentsFromMaterial(callback){
        var sql = "SELECT * FROM nactus.comments";
        return db.query(sql, callback);
    }

    addComment(comments, callback){
        var sql = "INSERT INTO nactus.comments (review, timePosted, rating, notes_id, assessment_id, video_id) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [comments.getReview(), comments.getTimePosted(), comments.getRating(), comments.getNotesId(), comments.getAssessmentId(), comments.getVideoId() ], callback);
    }

    updateComment(comment, callback){
        var sql = "UPDATE nactus.comments SET review = ?, rating = ?, timePosted = ? WHERE comments_id = ?";
        return db.query(sql, [comment.getReview(), comment.getRating(), comment.getTimePosted(), comment.getCommentsId()], callback);
    }

    deleteComment(commentID, callback){
        var sql = "DELETE FROM nactus.comments WHERE comments_id = ?";
        return db.query(sql, [commentID], callback)
    }

}

module.exports = CommentsDB;