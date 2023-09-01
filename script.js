// Sample data to simulate room availability
const availableRooms = ["Room 1", "Room 2", "Room 3","Room 4","Room 5","Room 6"];
const bookedRooms = {};
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
    const roomSelect = document.getElementById("room");;
    const timeSelect = document.getElementById("time");
    const selectedRoom = roomSelect.value;
    const selectedTime = timeSelect.value;


    if (!bookedRooms[selectedRoom]) {
        bookedRooms[selectedRoom] = [];
    }

    if (!bookedRooms[selectedRoom].includes(selectedTime)) {
        bookedRooms[selectedRoom].push(selectedTime);
        displayUserBookings();
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


