
function animateCountUp(element, start, end, duration) {
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let value = Math.min(start + (progress / duration) * (end - start), end);
        element.textContent = Math.floor(value);
        if (value < end) {
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".number-count");
    
    counters.forEach(el => {
        let start = parseInt(el.dataset.start);
        let end = parseInt(el.dataset.end);
        animateCountUp(el, start, end, 2000);
    });
});