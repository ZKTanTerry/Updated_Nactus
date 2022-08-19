//Function: displayNoteFilter()
//Result: create search box and filter box for user to find their preferred note
function displayNoteFilter() {
    var cell = '<form style="margin:auto" onsubmit="getnoteData()" value="value">\
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

//Function: getNoteData()
//Result: get all note and add it into material_array
function getNoteData() {
    var request = new XMLHttpRequest();
    var subject = document.getElementById("subjectFilter").value;
    var route = noteSearchSubject_url + subject;
    request.open('GET', route, true);
    //This function will be called when data returns from the web api    
    if (subject == "") {
        request.open('GET', note_url, true);
        //This function will be called when data returns from the web api    
        request.onload = function () {
        
            material_array = JSON.parse(request.responseText);
            //Fetch the comments as well        
            fetchComments();

            console.log(material_array);
            displayNote();

        };
    }
    else {
        //get the note that has same starting spelling of what is being searched
        request.open('GET', route, true);
        request.onload = function () {
            //recording it in the note array        
            material_array = JSON.parse(request.responseText);

            fetchComments();
            displayNote();

        };
    }

    //This command starts the calling of the note web api    
    request.send();
}

//Function: displayNote()
//Result: generate the note information in the review page according to the filter
function displayNote() {
    var table = document.getElementById("noteTable");
    table.innerHTML = "";
    var totalnote = material_array.length;
    for (var count = 0; count < totalnote; count++) {
        if (material_array[count] == material_array[count]) {
            var thumbnail = material_array[count].thumb;
            var title = material_array[count].title;
            var subject = material_array[count].subject;
            var hyperlink = material_array[count].note_link;
            var cell = '<div class="card col-md-4"><div><b data-toggle="modal" data-target="#commentModal" class="card-title" item="' + count + '" onClick="showNoteComments(this)"><img class="note-photo" src="' + thumbnail + '" alt="Card image cap">' + title + '</b>\
            <p id="subject">' + subject + '</p>\
            <a id= "note"  href = "'+ hyperlink + 'target = "_blank">Download Here</a>\
            <hr/>\
            <a href="https://jrb55z3059.execute-api.us-east-1.amazonaws.com/default/polly-demo-2?voice=Matthew&text=Kenneth want to find how much air is in the sky" target = "_blank">Get Audio</a>\
            </div>';
            table.insertAdjacentHTML('beforeend', cell);
            noteCount++;
        }
    }

    //changing the summary of the page depending on the filter

    document.getElementById("summary").textContent = "Notes";
    document.getElementById("parent").textContent = "";

}



//This function is to remove html that does not belong to the review page
function listAllNote(){
    document.getElementById("noteMenu").classList.add("active");//it shows that user is in the review page
    document.getElementById("homeMenu").classList.remove("active");
    document.getElementById("assessmentMenu").classList.remove("active");
    document.getElementById("videoMenu").classList.remove("active");
    document.getElementById("briefIntro").innerHTML = "";
    document.getElementById("homeDisplay").innerHTML = "";
    document.getElementById("assessmentTable").innerHTML = "";
    document.getElementById("videoTable").innerHTML = "";
    document.getElementById("weather").innerHTML = "";
    displayNoteFilter();
    getNoteData();
}