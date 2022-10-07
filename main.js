/*
Need a database.js to hold the array of objects for each object  Include getters for each list of objects

need a locations.js for displaying locations -- imports getLocations -- width 33% each

need a guestList.js for displaying the guests -- imports getGuests
*/

//Create basic website layout with Park name and Park Logo centered on top of screen.


//body display flex
//guestList aside, width = 25%
// locations width = 75%


//When the title of an area is clicked, display how many park guests are currently in the area. You and I both know how to do this.
import { Services } from "./scripts/services.js"
import { Locations } from "./scripts/Locations.js"
import { Guests } from "./scripts/guestList.js"

let parentHTMLElement = document.getElementById("park-services")
parentHTMLElement.innerHTML += Services()

parentHTMLElement = document.getElementById("locations")
parentHTMLElement.innerHTML += Locations()

const parentHTMLGuests = document.getElementById("guests")
parentHTMLGuests.innerHTML += Guests()