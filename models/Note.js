class Note{
    constructor(note_id, title, subject, topic, thumb, note_link){
        this.note_id = note_id;
        this.title = title;
        this.subject = subject;
        this.topic = topic;
        this.thumb = thumb;
        this.note_link = note_link;
    }

    getNoteId(){
        return this.note_id;
    }

    getTitle(){
        return this.title;
    }

    getSubject(){
        return this.subject;
    }

    getThumb(){
        return this.thumb
    }

    getNoteLink(){
        return this.note_link
    }
}

module.exports = Note;