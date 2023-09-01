const card = document.querySelectorAll('.carimg');
const RoomImage = document.querySelector('.btn img');
const Room = document.querySelector('#room');
const check = document.querySelectorAll('figure figcaption');

console.log(...check );

card.forEach(box => {
    box.addEventListener("click", function(e){
        RoomImage.src = box.src;
    });
})

Room.setAttribute("selected", RoomImage.src);

