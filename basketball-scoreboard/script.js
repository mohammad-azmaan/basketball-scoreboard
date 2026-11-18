let home_counter = document.getElementById("home-count")
let guest_counter = document.getElementById("guest-count")
let homeCount = 0
let guestCount = 0

function btnone() {
    homeCount += 1
    home_counter.textContent = homeCount
}

function btntwo() {
    homeCount += 2
    home_counter.textContent = homeCount
}

function btnthree() {
    homeCount += 3
    home_counter.textContent = homeCount
}

function btnfour() {
    guestCount += 1
    guest_counter.textContent = guestCount
}

function btnfive() {
    guestCount += 2
    guest_counter.textContent = guestCount
}

function btnsix() {
    guestCount += 3
    guest_counter.textContent = guestCount
}