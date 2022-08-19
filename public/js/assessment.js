//Function: displayAssessmentFilter()

const { array } = require("yargs");

//Result: create search box and filter box for user to find their preferred assessment
function displayAssessmentFilter() {
    var cell = '<form style="margin:auto" onsubmit="getAssessmentData()" value="value">\
    <label for="subject">Filter by subject:</label>\
    <select id="subjectFilter">\
    <option value="">Choose your suject</option>\
    <option value="English">English</option>\
    <option value="Chinese">Chinese</option>\
    <option value="Math">Math</option>\
    <option value="Science">Science</option>\
    </select>\
    <select id="levelFilter">\
    <option value=""> Choose your level </option>\
    <option value="P1">P1</option>\
    <option value="P2">P2</option>\
    <option value="P3">P3</option>\
    <option value="P4">P4</option>\
    <option value="P5">P5</option>\
    <option value="P6">P6</option>\
    </select>\
    <input type="submit">\
    </form>';
    document.getElementById("contentFilter").innerHTML = cell;
}

//Function: getAssessmentData()
//Result: get all Assessment and add it into material_array
function getAssessmentData() {
    var request = new XMLHttpRequest();
    var subject = document.getElementById("subjectFilter").value;
    var level = document.getElementById("levelFilter").value;
    var route = assessmentSearchSubject_url + subject;
    var route2 = assessmentSearchLevel_url + level;
    request.open('GET', route, true);
    //This function will be called when data returns from the web api    
    if (subject == "" && level == "") {
        request.open('GET', assessment_url, true);
        //This function will be called when data returns from the web api    
        request.onload = function () {

            material_array = JSON.parse(request.responseText);
            //Fetch the comments as well        
            fetchComments();

            console.log(material_array);
            displayAssessment();

        };
    }
    else if (level != "") {
        console.log("printed")
        request.open('GET', route2, true);
        request.onload = function () {
            //get all the assessments from selected level into the assessment array        
            material_array = JSON.parse(request.responseText);
            fetchComments();

            console.log(material_array)
            displayAssessment();
        };
    }
    else {
        //get the assessment that has same starting spelling of what is being searched
        request.open('GET', route, true);
        request.onload = function () {
            //recording it in the assessment array        
            material_array = JSON.parse(request.responseText);

            fetchComments();
            displayAssessment();

        };
    }

    //This command starts the calling of the Assessment web api    
    request.send();
}

//Function: displayAssessment()
//Result: generate the Assessment information in the review page according to the filter
function displayAssessment() {
    var table = document.getElementById("assessmentTable");
    table.innerHTML = "";
    var totalAssessment = material_array.length;
    for (var count = 0; count < totalAssessment; count++) {
        if (material_array[count] == material_array[count]) {
            var thumbnail = material_array[count].thumb;
            var title = material_array[count].title;
            var topic = material_array[count].topic;
            var subject = material_array[count].subject;
            var year = material_array[count].year;
            var hyperlink = material_array[count].hyperlink;
            var level = material_array[count].level;
            var school = material_array[count].school;
            var cell = '<div class="card col-md-4"><div><b data-toggle="modal" data-target="#commentModal" class="card-title" item="' + count + '" onClick="showAssessmentComments(this)"><img class="assessment-photo" src="' + thumbnail + '" alt="Card image cap">' + title + '</b>\
            <p id="subject">' + subject + '</p>\
            <p id="topic">' + topic + '</p>\
            <p id = "year">' + year + '</p>\
            <p id = "level">' + level + '</p>\
            <p id="school">' + school + '</p>\
            </div>\
            <a id= "assessment"  href = "'+ hyperlink + 'target = "_blank">Download Here</a>\
            </div>';
            table.insertAdjacentHTML('beforeend', cell);
            assessmentCount++;
        }
    }

    //changing the summary of the page depending on the filter

    document.getElementById("summary").textContent = "Assessments";
    document.getElementById("parent").textContent = "";

}



//This function is to remove html that does not belong to the review page
function listAllAssessment() {
    document.getElementById("assessmentMenu").classList.add("active");//it shows that user is in the review page
    document.getElementById("homeMenu").classList.remove("active");
    document.getElementById("noteMenu").classList.remove("active");
    document.getElementById("videoMenu").classList.remove("active");
    document.getElementById("briefIntro").innerHTML = "";
    document.getElementById("homeDisplay").innerHTML = "";
    document.getElementById("noteTable").innerHTML = "";
    document.getElementById("videoTable").innerHTML = "";
    document.getElementById("weather").innerHTML = "";
    displayAssessmentFilter();
    getAssessmentData();
}

//This function opens a new window/tab and loads the
//particular assessment website to get more details
function findMore() {
    window.open(material_array[currentIndex].hyperlink, "_blank");
}


// SHOW HOME PAGE//

//Create the quote in the home page
function displayQuote() {
    document.getElementById("summary").textContent = "";
}

//Remove html that does not belong to home page
function showHome() {
    document.getElementById("assessmentMenu").classList.remove("active");//it shows that user is in the review page
    document.getElementById("homeMenu").classList.add("active");
    document.getElementById("mapMenu").classList.remove("active");
    document.getElementById("noteMenu").classList.remove("active");
    document.getElementById("videoMenu").classList.remove("active");
    document.getElementById("accountMenu").classList.remove("active");
    document.getElementById("briefIntro").innerHTML = "";
    document.getElementById("aboutPage").innerHTML = "";
    document.getElementById("homeDisplay").innerHTML = "";
    document.getElementById("noteTable").innerHTML = "";
    document.getElementById("videoTable").innerHTML = "";
    document.getElementById("viewAccountPage").innerHTML = "";
    displayQuote();

}

let weather = {
    apiKey: "11c38f1a41a65392dd26a6980e65e253",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather("Vancouver");


function translateMe() {
    var translation = new XMLHttpRequest();

    translation.open("POST", translate_url, true);
    translation.setRequestHeader("Content-type", "application/json");
    var trans = document.getElementById("translateText").value;
    var payload = { "text": trans };
    translation.send(JSON.stringify(payload));
    console.log(payload);
    translation.onload = function () {

        var array = JSON.parse(translation.responseText);
        console.log(typeof(array));
        var text = JSON.parse(array.body).translatedText
        alert("Translation is:    " + text);
        document.getElementById("translatedValue").innerHTML = text;
    };

    


}

