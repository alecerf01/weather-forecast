var headerStyle = $("header")
    .css({ "background-image": "linear-gradient(to right, blue , darkblue)", "height":"100px","display":"flex","justify-content":"center","align-items":"center" })

var currentDate = moment();
// var day1 = moment("DD/MM/YYYY").add("days", 1).format("DD/MM/YYYY")
// console.log(day1)
// var day2 = moment("DD/MM/YYYY").add("days", 2).format("DD/MM/YYYY")
// var day3 = moment("DD/MM/YYYY").add("days", 3).format("DD/MM/YYYY")
// var day4 = moment("DD/MM/YYYY").add("days", 4).format("DD/MM/YYYY")
// var day5 = moment("DD/MM/YYYY").add("days", 5).format("DD/MM/YYYY")

var searchBtn = $("#search-button")

searchBtn = $("#search-button").css({"background-color":"lightblue","margin-top":"10px","border-radius":"10px","border":"solid black 2px","font-weight":"bold"})



function displayWeather() {
    // API URL and API Key
    var inputCity = "plymouth,uk";
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
        
        // $("<div>").addClass("city")
        // $("<div>").addClass("current-temp")
        // $("<div>").addClass("current-wind")
        // $("<div>").addClass("current-humdity")
        
        var currentIcon = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png")
        var currentCity = response.city.name;
        $(".city").text(currentCity + (currentDate.format(" (DD/MM/YYYY)")))
        .css({"font-size":"25px","font-weight":"bold"}).append(currentIcon);
        var currentTemp = Math.floor(response.list[0].main.temp - 273.15);
        $("#current-temp").text("Current Temperature: " + currentTemp + " &deg;C")
        .css({"font-size":"20px"});
        var currentWind = response.list[0].wind.speed;
        $("#current-wind").text("Wind Speed: " + currentWind + "KPH")
        .css({"font-size":"20px"});
        var currentHumidity = response.list[0].main.humidity;
        $("#current-humidity").text("Humidity: " + currentHumidity + "%")
        .css({"font-size":"20px"});
        
        // $("#forecast").css({"background-color":"gray","font-size":"16px", "font-weight":"bold", "color":"white","margin-right":"3px"})


        // Day One

        $("#day1").css({"background-color":"#2a325c","font-size":"16px", "font-weight":"bold", "color":"white","margin-right":"3px"})

        var dayOneIcon = response.list[7].weather[0].icon;
        $("#day-1-icon").attr("src", "http://openweathermap.org/img/wn/" + dayOneIcon + "@2x.png")
        var dayOneTemp = Math.floor(response.list[7].main.temp - 273.15);
        $("#day-1-temp").text("Temp: " + dayOneTemp +"C");
        var dayOneWind = response.list[7].wind.speed;
        $("#day-1-wind").text("Wind: " + dayOneWind + "KPH");
        var dayOneHumidity = response.list[7].main.humidity;
        $("#day-1-humidity").text(dayOneHumidity + "%")
        
        
        // Day Two

        $("#day2").css({"background-color":"#2a325c","font-size":"16px", "font-weight":"bold", "color":"white","margin-right":"3px"})

        var dayTwoIcon = response.list[15].weather[0].icon;
        $("#day-2-icon").attr("src", "http://openweathermap.org/img/wn/" + dayTwoIcon + "@2x.png")
        var dayTwoTemp = Math.floor(response.list[15].main.temp - 273.15);
        $("#day-2-temp").text("Temp: " + dayTwoTemp +"C");
        var dayTwoWind = response.list[15].wind.speed;
        $("#day-2-wind").text("Wind: " + dayTwoWind + "KPH");
        var dayTwoHumidity = response.list[15].main.humidity;
        $("#day-2-humidity").text(dayTwoHumidity + "%")

        // Day Three

        $("#day3").css({"background-color":"#2a325c","font-size":"16px", "font-weight":"bold", "color":"white","margin-right":"3px"})

        var dayThreeIcon = response.list[23].weather[0].icon;
        $("#day-3-icon").attr("src", "http://openweathermap.org/img/wn/" + dayThreeIcon + "@2x.png")
        var dayThreeTemp = Math.floor(response.list[23].main.temp - 273.15);
        $("#day-3-temp").text("Temp: " + dayThreeTemp +"C");
        var dayThreeWind = response.list[23].wind.speed;
        $("#day-3-wind").text("Wind: " + dayThreeWind + "KPH");
        var dayThreeHumidity = response.list[23].main.humidity;
        $("#day-3-humidity").text(dayThreeHumidity + "%")

        // Day Four

        $("#day4").css({"background-color":"#2a325c","font-size":"16px", "font-weight":"bold", "color":"white","margin-right":"3px"})

        var dayFourIcon = response.list[31].weather[0].icon;
        $("#day-4-icon").attr("src", "http://openweathermap.org/img/wn/" + dayFourIcon + "@2x.png")
        var dayFourTemp = Math.floor(response.list[31].main.temp - 273.15);
        $("#day-4-temp").text("Temp: " + dayFourTemp +"C");
        var dayFourWind = response.list[31].wind.speed;
        $("#day-4-wind").text("Wind: " + dayFourWind + "KPH");
        var dayFourHumidity = response.list[31].main.humidity;
        $("#day-4-humidity").text(dayFourHumidity + "%")
        
        // Day Five

        $("#day5").css({"background-color":"#2a325c","font-size":"16px", "font-weight":"bold", "color":"white","margin-right":"3px"})

        var dayFiveIcon = response.list[39].weather[0].icon;
        $("#day-5-icon").attr("src", "http://openweathermap.org/img/wn/" + dayFiveIcon + "@2x.png")
        var dayFiveTemp = Math.floor(response.list[39].main.temp - 273.15);
        $("#day-5-temp").text("Temp: " + dayFiveTemp +"C");
        var dayFiveWind = response.list[39].wind.speed;
        $("#day-5-wind").text("Wind: " + dayFiveWind + "KPH");
        var dayFiveHumidity = response.list[39].main.humidity;
        $("#day-5-humidity").text(dayFiveHumidity + "%")
    })
}

searchBtn.on("click", function (event) {
    event.preventDefault();
    displayWeather();

})

// startdate = "20.03.2014";
// var new_date = moment(startdate, "DD-MM-YYYY").add('days', 1);

// var day = new_date.format('DD.MM.YYYY');


// console.log(day);