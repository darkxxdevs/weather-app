// global access variables
const temSpace = document.getElementById("temprature");
const cityName = document.getElementById("city");
const humidPercent = document.getElementById("humidity-percent");
const windSpeed = document.getElementById("wind-speed");
const searchBar = document.getElementById("search-input");
const dayNightIcon = document.getElementById("day-night-icon")

searchBar.addEventListener("focus", () => {
    searchBar.placeholder = '';

});

searchBar.addEventListener("blur", () => {
    if (!searchBar.value) {
        searchBar.placeholder = "Enter your location"
    }
})



// api part 

async function fetchData(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '60d64744a6mshf25bd05979f35fdp100c91jsnba74712d9184',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        temSpace.innerHTML = `${result.current.temp_c}°C`;
        cityName.innerHTML = `${result.location.name}`;
        humidPercent.innerHTML = `${result.current.humidity}%`
        windSpeed.innerHTML = `${result.current.wind_kph} km/h`
        console.log(result);


    } catch (error) {
        console.error(error);
    }
}

function handleSearch() {
    const searchLocation = document.getElementById('search-input').value;
    fetchData(searchLocation);

}

// keypress enevnt handling 
document.getElementById("search-input").addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        handleSearch();
    }
})

document.getElementById("search-button").addEventListener("click", () => {
    handleSearch();
})

