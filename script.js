const bookBtns = document.querySelectorAll(".bookTicketBtn");
const ticketForm = document.getElementById("ticketForm");
const closeForm = document.getElementById("closeForm");

bookBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        ticketForm.classList.add("active");
    });
    
});

closeForm.addEventListener("click", function(){
    ticketForm.classList.remove("active");
});