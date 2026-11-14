// Reusable Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";

    // Hide toast after 3 seconds
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

// Smooth Scroll to Booking Form + Trigger Toast
function scrollToBooking(matchName) {
    const bookingSection = document.getElementById("booking");
    
    // Smooth scroll down to form
    bookingSection.scrollIntoView({ behavior: "smooth" });
    
    // Auto-select the clicked match in dropdown
    const matchSelect = document.getElementById("matchSelect");
    if (matchSelect && matchName) {
        matchSelect.value = matchName;
    }

    // Show confirmation toast
    showToast("Selected " + matchName + " - Complete your booking below!");
}

// Form Submit Event Listener
document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("ticketForm");
    
    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload
            showToast("Ticket Booking Confirmed! Check your email.");
            bookingForm.reset();
        });
    }
});