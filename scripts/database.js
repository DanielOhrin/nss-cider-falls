const database = {
    locations: [
        {
            id: 1,
            name: "The Lodge",
            imgURL: "https://live.staticflickr.com/3040/3616986727_656363811b_c.jpg",
            extras: "Includes hotel and restaurant"
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
            imgURL: "https://live.staticflickr.com/3040/3616986727_656363811b_c.jpg",
            extras: null
        },
        {
            id: 3,
            name: "Chamfort River",
            imgURL: "https://live.staticflickr.com/3040/3616986727_656363811b_c.jpg",
            extras: null
        },
        {
            id: 4,
            name: "Gander River",
            imgURL: "https://live.staticflickr.com/3040/3616986727_656363811b_c.jpg",
            extras: "Natural Preserve"
        },
        {
            id: 5,
            name: "Campgrounds",
            imgURL: "https://live.staticflickr.com/3040/3616986727_656363811b_c.jpg",
            extras: "Office park & Children Play Areas"
        },
        {
            id: 6,
            name: "Pine Bluff Trails",
            imgURL: "https://live.staticflickr.com/3040/3616986727_656363811b_c.jpg",
            extras: ["Vast network of trails for all levels of hikers", "Food vendors on beginner trail"]
        }
    ],

    services: [
        {
            id: 1,
            locationId: 3,
            description: "Rafting, Canoeing, and Fishing"
        },
        {
            id: 2,
            locationId: 5,
            description: "Information, Lodging, and Parking"
        },
        {
            id: 3,
            locationId: 2,
            description: "Hiking, Picknicking, and Rock Climbing"
        },
        {
            id: 4,
            locationId: 1,
            description: "Lodging, Parking, Information, and Picknicking"
        },
        {
            id: 5,
            locationId: 4,
            description: "Fishing and Hiking"
        },
        {
            id: 6,
            locationId: 6,
            description: "Hiking, Picknicking, and Zip Lines"
        }
    ],
    
    guests: [
        {
            id: 1,
            name: "Daniel Ohrin",
            locationId: 1
        },
        {
            id: 2,
            name: "First Last",
            locationId: 2
        },
        {
            id: 3,
            name: "First Last",
            locationId: 5
        },
        {
            id: 4,
            name: "First Last",
            locationId: 3
        },
        {
            id: 5,
            name: "First Last",
            locationId: 4
        },
        {
            id: 6,
            name: "First Last",
            locationId: 6
        },
        {
            id: 7,
            name: "First Last",
            locationId: 6
        },
        {
            id: 8,
            name: "First Last",
            locationId: 3
        },
        {
            id: 9,
            name: "First Last",
            locationId: 2
        }, 
        {
            id: 10,
            name: "First Last",
            locationId: 3
        }
    ]
}

export const getLocations = () => {
    return database.locations.map(location => ({ ...location }))
}
export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}
export const getGuests = () => {
    return database.guests.map(guest => ({ ...guest }))
}
