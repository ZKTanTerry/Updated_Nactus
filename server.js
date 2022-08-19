var express = require("express"); //using the express web framework

var videoController = require('./controllers/videoController');
var commentController = require('./controllers/commentController');
var assessmentController = require('./controllers/assessmentController');
var noteController = require('./controllers/noteController');

var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/assessment').get(assessmentController.getAllAssessment);
app.route('/comments').get(commentController.getCommentsFromMaterial);
app.route('/addComments').post(commentController.addComment);
app.route('/updateComments/:id').put(commentController.updateComment);
app.route('/deleteComments/:id').delete(commentController.deleteComment);
app.route('/searchAssessmentLevel/:level').get(assessmentController.getAssessmentFromLevel);
app.route('/searchAssessmentSubject/:subject').get(assessmentController.getAssessmentFromSubject);
app.route('/searchNoteSubject/:subject').get(noteController.getNotesFromSubject);
app.route('/note').get(noteController.getAllNotes);
app.route('/searchVideoSubject/:subject').get(videoController.getVideosFromSubject);
app.route('/video').get(videoController.getAllVideos);


app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); // output to console 