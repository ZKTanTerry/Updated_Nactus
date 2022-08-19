"use strict";

class Comments {
    constructor(comments_id, notes_id, assessment_id, review, rating, timePosted, video_id) {
        this.comments_id = comments_id;
        this.notes_id = notes_id;
        this.assessment_id = assessment_id;
        this.review = review;
        this.rating = rating;
        this.timePosted = timePosted;
        this.video_id = video_id
    }
    getCommentsId() {
        return this.comments_id;
    }
    getVideoId(){
        return this.video_id;
    }

    getNotesId() {
        return this.notes_id;
    }
    getAssessmentId() {
        return this.assessment_id;
    }
    getReview() {
        return this.review;
    }
    getRating() {
        return this.rating;
    }
    getTimePosted() {
        return this.timePosted;
    }

    setNotesId(notes_id) {
        this.notes_id = notes_id;
    }
    setAssessmentId(assessment_id) {
        this.assessment_id = assessment_id;
    }
    setReview(review) {
        this.review = review;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setTimePosted(timePosted) {
        this.timePosted = timePosted;
    }
    setVideoId(video_id){
        this.video_id = video_id;
    }


}


module.exports = Comments;
