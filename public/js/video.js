//Function: displayVideoFilter()
//Result: create search box and filter box for user to find their preferred video
function displayVideoFilter() {
    var cell = '<form style="margin:auto" onsubmit="getVideoData()" value="value">\
    <label for="subject">Filter by subject:</label>\
    <select id="subjectFilter">\
    <option value="">Choose your suject</option>\
    <option value="English">English</option>\
    <option value="Chinese">Chinese</option>\
    <option value="Math">Math</option>\
    <option value="Science">Science</option>\
    </select>\
    <input type="submit">\
    </form>';
    document.getElementById("contentFilter").innerHTML = cell;
}

//Function: getvideoData()
//Result: get all video and add it into material_array
function getVideoData() {
    var request = new XMLHttpRequest();
    var subject = document.getElementById("subjectFilter").value;
    var route = videoSearchSubject_url + subject;
    request.open('GET', route, true);
    //This function will be called when data returns from the web api    
    if (subject == "") {
        request.open('GET', video_url, true);
        //This function will be called when data returns from the web api    
        request.onload = function () {
        
            material_array = JSON.parse(request.responseText);
            //Fetch the comments as well        
            fetchComments();

            console.log(material_array);
            displayvideo();

        };
    }
    else {
        //get the video that has same starting spelling of what is being searched
        request.open('GET', route, true);
        request.onload = function () {
            //recording it in the video array        
            material_array = JSON.parse(request.responseText);

            fetchComments();
            displayvideo();

        };
    }

    //This command starts the calling of the video web api    
    request.send();
}

//Function: displayvideo()
//Result: generate the video information in the review page according to the filter
function displayvideo() {
    var table = document.getElementById("videoTable");
    table.innerHTML = "";
    var totalvideo = material_array.length;
    for (var count = 0; count < totalvideo; count++) {
        if (material_array[count] == material_array[count]) {
            var title = material_array[count].title;
            var subject = material_array[count].subject;
            var topic = material_array[count].topic;
            var hyperlink = material_array[count].video_link;
            var cell = '<div class="card col-md-4 videoCard">\
            <iframe src = "'+ hyperlink +'"frameborder = "0" allowfullscreen class="video"></iframe>\
            <div><b data-toggle="modal" data-target="#commentModal" class="card-title" item="' + count + '" onClick="showVideoComments(this)">' + title + '</b>\
            <p id="subject">' + subject + '</p>\
            <p id="topic">' + topic + '</p>\
            </div>'
            table.insertAdjacentHTML('beforeend', cell);
            videoCount++;
        }
    }

    //changing the summary of the page depending on the filter

    document.getElementById("summary").textContent = "Videos";
    document.getElementById("parent").textContent = "";

}



//This function is to remove html that does not belong to the review page
function listAllVideo(){
    document.getElementById("videoMenu").classList.add("active");//it shows that user is in the review page
    document.getElementById("homeMenu").classList.remove("active");
    document.getElementById("assessmentMenu").classList.remove("active");
    document.getElementById("noteMenu").classList.remove("active");
    document.getElementById("briefIntro").innerHTML = "";
    document.getElementById("aboutPage").innerHTML = "";
    document.getElementById("homeDisplay").innerHTML = "";
    document.getElementById("assessmentTable").innerHTML = "";
    document.getElementById("noteTable").innerHTML = "";
    document.getElementById("weather").innerHTML = "";
    displayVideoFilter();
    getVideoData();
}