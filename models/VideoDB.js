"use strict";

var db = require('../db-connections');
class VideoDB{
    getAllVideos(callback){
        var sql = "SELECT * FROM nactus.videos";
        db.query(sql, callback);
    }
    
    getVideosSubject(subject, callback){
        var sql = "SELECT * FROM nactus.videos WHERE subject LIKE ?";
        return db.query(sql, [subject + "%"], callback);
    }
    
    getVideosTopic(topic, callback){
        var sql = "SELECT * FROM nactus.videos WHERE topic LIKE ?";
        return db.query(sql, [topic + "%"], callback);
    }

}

module.exports = VideoDB;