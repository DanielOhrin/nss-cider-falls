import { getLocations, getServices, getGuests } from "./database.js"

const locations = getLocations()
const services = getServices()
const guests = getGuests()

export const Locations = () => {
    let html = ""
    let service = ""
    
    for (const location of locations) {
        let extras = ""
        
        //Logic for service provided by each location
        let matchingService = services.find(service => service.locationId === location.id)
        service = `<li>${matchingService.description}</li>`

        //Logic for extras provided by each location
        if (location.extras === null) {
            extras = ""
        } else if (Array.isArray(location.extras)) {
            location.extras.forEach(extra => {extras += `<li>${extra}</li>\n`})
        } else {
            extras += `<li>${location.extras}</li>`
        }
        
        //HTML string to be called in main.js
        html += `<div id="div-location-${location.id}">
    <h2 class="location-header" id="location--${location.id}">${location.name}</h2>
    <div class="images-div">
        <img src="${location.imgURL}" alt="Park Picture">
    </div>
    <div class="ul-div">
        <ul>
            ${service}
            ${extras}
        </ul>
    </div>
</div>`
    }
    return html
}

// Creates popup that displays how many guests are in the area when user clicks on a location header

document.addEventListener(
    "click",
    e => {
        let targetClicked = e.target
        
        if (targetClicked.id.startsWith('location') && targetClicked.id !== "locations") {
            const [,locationId] = targetClicked.id.split("--")

            let guestsInArea = 0;
            for (const guest of guests) {
                if (guest.locationId === parseInt(locationId)) {
                    guestsInArea++
                }
            }
            guestsInArea > 1 ? window.alert(`There are ${guestsInArea} guests in this area`) : window.alert(`There is ${guestsInArea} guest in this area`)
        }
    }
)
