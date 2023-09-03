// Sample data to simulate room availability
const availableRooms = ["Room 1", "Room 2", "Room 3", "Room 4", "Room 5", "Room 6"];
let bookedRooms = {};

const RoomImage = document.querySelector('.btn img');
const Room = document.querySelector('#room');
const cardElements = document.querySelectorAll('figure.card');
let roomSelect = "";
const RoomNo = document.querySelector('.btn h3');
const clickableCaption = document.querySelectorAll(".myClickableCaption");

cardElements.forEach(cardElement => {

    cardElement.addEventListener("click", function (e) {


        // Find the img element within the card element
        const imgElement = cardElement.querySelector('img');

        // Find the figcaption element within the card element
        const figcaptionElement = cardElement.querySelector('figcaption');

        // Get the src attribute value from the img element
        const src = imgElement ? imgElement.getAttribute('src') : '';

        // Get the text content of the figcaption element
        const figcaption = figcaptionElement ? figcaptionElement.textContent : '';

        // Push the values into the respective arrays
        RoomImage.src = src;
        roomSelect = figcaption;
        RoomNo.innerHTML = roomSelect;
    });
});

clickableCaption.forEach(cardElement => {

    cardElement.addEventListener("click", function () {
        window.location.href = "home.html#booking-form";
    });
});


// Function to display available rooms
function displayAvailableRooms() {
    const roomsList = document.getElementById("rooms");
    roomsList.innerHTML = "";

    availableRooms.forEach(room => {
        const li = document.createElement("li");
        li.textContent = room;
        roomsList.appendChild(li);
    });
}

// Function to book a room
function bookRoom() {
    const timeSelect = document.getElementById("time");
    const selectedRoom = roomSelect;
    const selectedTime = timeSelect.value;

    if (!bookedRooms[selectedRoom]) {

        bookedRooms[selectedRoom] = [];
    }

    if (!bookedRooms[selectedRoom].includes(selectedTime)) {
        bookedRooms[selectedRoom].push(selectedTime);
        displayUserBookings();
        swal("", "Room booked successfully.", "success");
        saveData();

    } else {
        swal("", "This room is already booked for the selected time slot.", "error");
    }

}

// Function to display user bookings

const bookingsList = document.getElementById("bookings");

function displayUserBookings() {

    bookingsList.innerHTML = "";

    for (const room in bookedRooms) {
        const roomBookings = bookedRooms[room];
        roomBookings.forEach(booking => {
            const li = document.createElement("li");
            li.textContent = `${room}: ${booking}`;
            bookingsList.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span)
        });
    }
}

bookingsList.addEventListener("click", function (e) {
    const parentElement = e.target.parentElement;
    let [room, time] = parentElement.innerText.split(": ");
    [time, x] = time.split("\n");
    if (e.target.tagName === "SPAN") {
        const index = bookedRooms[room].indexOf(time);
        bookedRooms[room].splice(index, 1);
        e.target.parentElement.remove();

        saveData();
    }
}, false);

// Initialize the application
window.onload = function () {
    displayAvailableRooms();
    displayUserBookings();
    showTask();
    displayUserBookings();
    const bookButton = document.getElementById("book-button");
    bookButton.addEventListener("click", bookRoom);
};

function saveData() {
    const bookedRoomsJSON = JSON.stringify(bookedRooms);
    localStorage.setItem("booked", bookedRoomsJSON);

}

function showTask() {
    const bookedRoomsJSON = localStorage.getItem("booked");
    if (!bookedRoomsJSON) {
        bookedRooms = { "Room 1": [] };
    }
    else {
        bookedRooms = JSON.parse(bookedRoomsJSON);
    }
}