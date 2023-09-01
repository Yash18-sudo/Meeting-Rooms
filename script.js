// Sample data to simulate room availability
const availableRooms = ["Room 1", "Room 2", "Room 3","Room 4","Room 5","Room 6"];
const bookedRooms = {};

const RoomImage = document.querySelector('.btn img');
const Room = document.querySelector('#room');
const cardElements = document.querySelectorAll('figure.card');
let roomSelect = "";
const RoomNo = document.querySelector('.btn h3');

cardElements.forEach(cardElement => {

    cardElement.addEventListener("click", function(e){
                
            
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
        alert("Room booked successfully.");
    } else {
        alert("This room is already booked for the selected time slot.");
    }
}

// Function to display user bookings
function displayUserBookings() {
    const bookingsList = document.getElementById("bookings");
    bookingsList.innerHTML = "";
    
    for (const room in bookedRooms) {
        const roomBookings = bookedRooms[room];
        roomBookings.forEach(booking => {
            const li = document.createElement("li");
            li.textContent = `${room}: ${booking}`;
            bookingsList.appendChild(li);
        });
    }
}

// Initialize the application
window.onload = function () {
    displayAvailableRooms();
    displayUserBookings();

    const bookButton = document.getElementById("book-button");
    bookButton.addEventListener("click", bookRoom);
};


