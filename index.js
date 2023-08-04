
const searchBar = document.getElementById("search-input")

searchBar.addEventListener("focus", () => {
    searchBar.placeholder = '';
});

searchBar.addEventListener("blur", () => {
    if (!searchBar.value) {
        searchBar.placeholder = "Enter your location"
    }
})


// api part 
const apiUrl = "https://www.weatherapi.com/v"
const apiKey = 'fd068f17ed4c4a67afb144907230408'

async function fetchData() {

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error("Network refused response ")
        }

        const data = response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();