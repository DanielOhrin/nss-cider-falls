import { getGuests } from "./database.js"

const guests = getGuests()

export const Guests = () => {
    let guestList = ""

    for (const guest of guests) {
        guestList += `<p class="guests-p">${guest.id}. ${guest.name}</p>`
    }
    guestList += ""

    return guestList
}

// 