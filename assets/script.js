var headerStyle = $("header")
    .css({ "background-image": "linear-gradient(to right, blue , darkblue)" })

var currentDate = moment();

var searchBtn = $("#search-button")

searchBtn = $("#search-button").css({"background-color":"lightblue","margin-top":"10px"})



function displayWeather() {
    // API URL and API Key
    var inputCity = "Plymouth,UK";
    var APIKey = "75f87170766a1fa219fe8b9fd08ad11b"
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${APIKey}`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(queryURL)
        console.log(inputCity)
        console.log(response)
        // var currentWeather = $("#today");
        $("#today").css({"border":"solid black", "border-radius":"5px", "padding-bottom":"20px"})
        
        $("<div>").addClass("city")
        $("<div>").addClass("temp")
        $("<div>").addClass("wind")
        $("<div>").addClass("humdity")
        
        var currentIcon = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png")
        var currentCity = response.city.name;
        $(".city").text(currentCity + (currentDate.format(" (DD/MM/YYYY)")))
        .css({"font-size":"25px","font-weight":"bold"}).append(currentIcon);
        var currentTemp = Math.floor(response.list[0].main.temp - 273.15);
        $(".temp").text("Current Temperature: " + currentTemp + " &deg;C")
        .css({"font-size":"20px"});
        var currentWind = response.list[0].wind.speed;
        $(".wind").text("Wind Speed: " + currentWind + "Kph")
        .css({"font-size":"20px"});
        var currentHumidity = response.list[0].main.humidity;
        $(".humidity").text("Humidity: " + currentHumidity + "%")
        .css({"font-size":"20px"});
        
        
        // currentWeather.append();
    })
}

searchBtn.on("click", function (event) {
    event.preventDefault();
    displayWeather();

})

