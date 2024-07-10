const clock = document.getElementById('clock')
// document.querySelector('#clock')


// Update the clock every second

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// Function to open the calendar popup
function openCalendar() {
    document.getElementById('calendarPopup').style.display = 'block';
}

// Function to close the calendar popup
function closeCalendar() {
    document.getElementById('calendarPopup').style.display = 'none';
}

// Add event listeners to the buttons
document.getElementById('openCalendarBtn').addEventListener('click', openCalendar);
document.getElementById('closeCalendarBtn').addEventListener('click', closeCalendar);