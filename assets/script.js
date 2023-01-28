let headerStyle = $("header")
    .css({ "background-image": "linear-gradient(to right, blue , darkblue)" })

    var currentDate = moment();
    

// let searchBtn = $("#search-button").css({"background-color":"lightblue"})
// let searchForm = $("#search-form").css({"border-radius":"5px"})


// API URL and API Key
var city = "brazilia"
var APIKey = "75f87170766a1fa219fe8b9fd08ad11b"
var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`
var searchBtn = $("#search-button")

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // console.log(queryURL)
    console.log(response)

    searchBtn.on("click", function (event) {
        event.preventDefault();
        // var currentWeather = $("#today");
        var currentIcon = $("<img>").attr("src", "http://openweathermap.org/img/wn/"+response.list[0].weather[0].icon+"@2x.png") 

        $("<div>").addClass("city")
        $("<div>").addClass("temp")
        $("<div>").addClass("wind")
        $("<div>").addClass("humdity")

        currentCity = response.city.name;
        $(".city").text(response.city.name + (currentDate.format(" (DD/MM/YYYY)"))).append(currentIcon);
        var currentTemp = Math.floor(response.list[0].main.temp - 273.15);
        $(".temp").text(currentTemp + "C");
        var currentWind = response.list[0].wind.speed;
        $(".wind").text(currentWind + "Kph");
        var currentHumidity = response.list[0].main.humidity;
        $(".humidity").text(currentHumidity + "%");


        // currentWeather.append();

    })
})
