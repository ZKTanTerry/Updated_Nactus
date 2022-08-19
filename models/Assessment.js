"use strict";

class Assessment{
    constructor(assessment_id, title, subject, topic, school, year, level, hyperlink, thumb){
        this.assessment_id = assessment_id;
        this.title = title;
        this.subject = subject;
        this.topic = topic;
        this.school = school;
        this.year = year;
        this.level = level;
        this.hyperlink = hyperlink;
        this.thumb = thumb
    }

    getAssessmentId(){
        return this.assessment_id;
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

    getSchool(){
        return this.school;
    }

    getYear(){
        return this.year;
    }

    getLevel(){
        return this.level;
    }

    getHyperlink(){
        return this.hyperlink;
    }

    getThumb(){
        return this.thumb;
    }
}

module.exports = Assessment;