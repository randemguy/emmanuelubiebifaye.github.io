document.addEventListener('DOMContentLoaded', function() {
    // Update current UTC time
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentTimeUTC = new Date().toUTCString();
    currentTimeUTCElement.textContent = `Current Time: ${currentTimeUTC}`;

    // Update current day of the week
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    currentDayElement.textContent = `Current Day: ${currentDay}`;
});
