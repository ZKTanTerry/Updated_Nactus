function fetchComments() {
    var request = new XMLHttpRequest();
    request.open('GET', comment_url, true);

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        comment_array = JSON.parse(request.responseText);
        console.log(comment_array);
        //alert(comment_array);
    };

    request.send();
}

//This function is to display all the comments of that material
//whenever the user click on the name of the material button
function showAssessmentComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("reviewShown").textContent = "Review for " + material_array[item].title;
    document.getElementById("commentBody").textContent = "";

    document.getElementById("newComment").setAttribute("data-target", "#newCommentModal") //login in user will be allowed to comment


    //comments of the material are shown 
    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].assessment_id === material_array[item].assessment_id) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedmaterialId = material_array[item].comments_id;
            star = "";
            var html = '<div style="width:100%;">\
                            <div class="card commentsCard">\
                                <div class="card-body">\
                                <small> @ ' + comment_array[i].timePosted + '</small>\
                                <div>\
                                <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>\
                                </div>\
                                </div>\
                            </div>\
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img class='displayedRating' src='images/star.png'/>";
            }
            //Delete and edit button for the comments are only shown to its owner
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' style='width:30px' id='deleteEdit'></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' style='width:30px;margin-right:10px' id='updateEdit'></i>";


            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

function showNoteComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("reviewShown").textContent = "Review for " + material_array[item].title;
    document.getElementById("commentBody").textContent = "";

    document.getElementById("newComment").setAttribute("data-target", "#newCommentModal") //login in user will be allowed to comment


    //comments of the material are shown 
    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].note_id === material_array[item].note_id) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedmaterialId = material_array[item].comments_id;
            star = "";
            var html = '<div style="width:100%;">\
                            <div class="card commentsCard">\
                                <div class="card-body">\
                                <small> @ ' + comment_array[i].timePosted + '</small>\
                                <div>\
                                <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>\
                                </div>\
                                </div>\
                            </div>\
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img class='displayedRating' src='images/star.png'/>";
            }
            //Delete and edit button for the comments are only shown to its owner
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' style='width:30px' id='deleteEdit'></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' style='width:30px;margin-right:10px' id='updateEdit'></i>";


            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

function showVideoComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("reviewShown").textContent = "Review for " + material_array[item].title;
    document.getElementById("commentBody").textContent = "";

    document.getElementById("newComment").setAttribute("data-target", "#newCommentModal") //login in user will be allowed to comment


    //comments of the material are shown 
    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].video_id === material_array[item].video_id) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedMaterialId = material_array[item].comments_id;
            star = "";
            var html = '<div style="width:100%;">\
                            <div class="card commentsCard">\
                                <div class="card-body">\
                                <small> @ ' + comment_array[i].timePosted + '</small>\
                                <div>\
                                <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>\
                                </div>\
                                </div>\
                            </div>\
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img class='displayedRating' src='images/star.png'/>";
            }
            //Delete and edit button for the comments are only shown to its owner
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' style='width:30px' id='deleteEdit'></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item='" + i + "' onClick='editComment(this)' style='width:30px;margin-right:10px' id='updateEdit'></i>";


            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}

//Function: newComment()
//Result: set review and rating to default numbers
function newComment() {
    console.log(loggedUser[0]);
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";

}

//Function: addComment()
// Submit or send the new comment to the server to be added.
function addComment() {
    console.log(loggedUser[0]);
    var comment = new Object();
    comment.notes_id = material_array[currentIndex].notes_id; // material ID is required by server to create new comment 
    comment.assessment_id = material_array[currentIndex].assessment_id;
    comment.video_id = material_array[currentIndex].video_id;
    comment.review = document.getElementById("userComments").value; // Value from HTML input text
    comment.timePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    comment.rating = rating;

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postComment.open("POST", addComments_url, true); //Use the HTTP POST method to send data to server

    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        console.log("new comment sent");
        fetchComments(); // fetch all comments again so that the web page can have updated comments.     
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comment));
}

//This function allows the user to mouse hover the stars
//so that it will turn to a colored version when hovered
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    // This is another way of writing 'for' loop, which initialises the 
    // star images to use black and white.
    for (let star of stars) {
        star.setAttribute("src", starBWImage);
    }
    changeStarImage(num, classTarget);
}

// This function sets the rating and coloured images based on the value of the image tag when  
// the mouse cursor hovers over the star image.
function changeStarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
            rating = 5;
            break;
    }
}

//This function will hide the existing modal and present a modal with the selected comment
//so that the user can attempt to change rating or material review
function editComment(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("edituserComments").value = comment_array[item].review;
    console.log(comment_array[item].rating);
    displayColorstar('editstar', comment_array[item].rating);
}

//This function displayS the correct number of colored star
//based on the material rating that is given in the user comment
function displayColorstar(classname, num) {
    var star = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let s of star) {
        s.setAttribute("src", starBWImage);
    }
    changeStarImage(num, classTarget);
}

//This function sends the Comment data to the server for updating
function updateComment() {
    var response = confirm("Are you sure you want to update this comment?");
    if (response == true) {
        var edit_comment_url = updateComments_url + comment_array[currentIndex].comments_id;
        var updateComment = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateComment.open("PUT", edit_comment_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateComment.setRequestHeader("Content-Type", "application/json");
        comment_array[currentIndex].review = document.getElementById("edituserComments").value;
        comment_array[currentIndex].rating = rating;
        updateComment.onload = function () {
            fetchComments();
        };
        updateComment.send(JSON.stringify(comment_array[currentIndex]));
    }
}

//This function deletes the selected comment in a specific material
function deleteComment(element) {
    var response = confirm("Are you sure you want to delete this comment?");

    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_comment_url = deleteComments_url + comment_array[item].comments_id;
        var eraseComment = new XMLHttpRequest();
        eraseComment.open("DELETE", delete_comment_url, true);
        eraseComment.onload = function () {
            fetchComments();
        };
        eraseComment.send();
    }
}


