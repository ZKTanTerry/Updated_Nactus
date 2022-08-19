"use strict"

class Video{
    constructor(videos_id, title, subject, topic, description, video_link){
        this.videos_id = videos_id;
        this.title = title;
        this.subject = subject;
        this.topic = topic;
        this.description = description;
        this.video_link = video_link;
    }

    getVideosId(){
        return this.videos_id;
    }

    getTitle(){
        return this.title;
    }

    getSubject(){
        return this.subject;
    }

    getTopic(){
        return this.topic;
    }

    getDescription(){
        return this.description;
    }

    getVideolink(){
        return this.video_link;
    } 
}

module.exports = Video;