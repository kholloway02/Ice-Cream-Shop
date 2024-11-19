// JavaScript file for Sweet Scoops functionality

// Confirmation Alert for form submission
function confirmSubmission(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to submit the form?")) {
        alert("Thank you for contacting us!");
        window.location.href = "thankyou.html";
    }
}

// Display today's special flavors
const flavors = ["Vanilla", "Chocolate", "Strawberry", "Mint Chip"];
let flavorList = "Today's Specials:\n";
for (let i = 0; i < flavors.length; i++) {
    flavorList += `${i + 1}. ${flavors[i]}\n`;
}
alert(flavorList);


