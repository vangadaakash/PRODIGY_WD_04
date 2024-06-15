function handleSubmit(event) {
       event.preventDefault(); // Prevent the form from submitting the traditional way
       alert("Thank you for your message!");
event.target.reset(); 
     }
document.addEventListener("DOMContentLoaded", function() {
       const form = document.querySelector("form");
       form.addEventListener("submit", handleSubmit);
    });
    
