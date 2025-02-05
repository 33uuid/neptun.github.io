document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    const notification = document.createElement("div");
    notification.classList.add("notification");
    document.body.appendChild(notification);
    
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            notification.textContent = "Unavailable";
            notification.classList.add("show");
            
            setTimeout(() => {
                notification.classList.remove("show");
            }, 1000);
        });
    });
});
