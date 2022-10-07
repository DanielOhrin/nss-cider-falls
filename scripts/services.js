import { getServices, getLocations } from "./database.js"

const locations = getLocations()
const serviceObjects = getServices()
const services = ['Hiking', 'Canoeing', 'Picknicking', 'Parking', 'Lodging', 'Rock Climbing', 'Rafting', 'Fishing']

export const Services = () => {
    let html = ``
    for (const service of services) {
        services.indexOf(service) !== services.length - 1 ? html += `<a id="service--${services.indexOf(service)}">${service}, </a>` : html += `<a id="service--${services.indexOf(service)}">and ${service}</a>`
    }
    return html
}

document.addEventListener(
    "click",
    e => {
        let targetClicked = e.target

        if (targetClicked.id.startsWith("service")) {
            let serviceObjMatches = [] // Push service objects that include the clicked upon service
            let matchingLocations = []

            let servClicked = targetClicked.innerHTML.replace(", ", "")
            servClicked = servClicked.replace("and ", "")
            console.log(servClicked)

            for (const service of serviceObjects) {
                if (service.description.includes(servClicked)) {
                    serviceObjMatches.push(service.locationId)
                }
            }

            for (const id of serviceObjMatches) {
                for (const location of locations) {
                    if (location.id === id) {
                        matchingLocations.push(location.name)
                    }
                }
            }
            matchingLocations.length > 1 ? window.alert(`${servClicked} is available in ${matchingLocations.join(" and ")}`) : window.alert(`${servClicked} is available in ${matchingLocations[0]}`)
        }
    }
)


