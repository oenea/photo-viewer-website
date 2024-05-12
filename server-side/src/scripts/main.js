const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
})

const START_TIME_STORAGE_ID = 'start-time';
const TIME_OUTPUT_ID = 'session-time';
function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return [
        h,
        m > 9 ? m : (h ? '0' + m : m || '0'),
        s > 9 ? s : '0' + s
    ].filter(Boolean).join(':');
}
document.addEventListener('DOMContentLoaded', () => {
    if (window.sessionStorage) {
        if (!sessionStorage.getItem(START_TIME_STORAGE_ID)) {
            sessionStorage.setItem(START_TIME_STORAGE_ID, Date.now().toString());
        }
        updateTimer();
        setInterval(updateTimer, 1000);
    }
});
function updateTimer() {
    var _a;
    const start_time = parseInt((_a = sessionStorage.getItem(START_TIME_STORAGE_ID)) !== null && _a !== void 0 ? _a : '0');
    const elapsed_seconds = Math.floor((Date.now() - start_time) / 1000);
    const time_output = document.getElementById(TIME_OUTPUT_ID);
    if (time_output) {
        time_output.innerText = formatTime(elapsed_seconds);
    }
}

$( function() {
  $("#draggable" ).draggable();
} )


$('footer').prepend("<div><i>Java Script włączony</i></div>");
