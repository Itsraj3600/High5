// Function to format the date
function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
}

// Get current date and time
const currentDate = new Date();

// Display current date and time in the specified format
document.getElementById("currentDateTime").textContent =
  formatDate(currentDate);

// Update time every second
setInterval(() => {
  const currentDate = new Date();
  document.getElementById("currentDateTime").textContent =
    formatDate(currentDate);
}, 1000);
