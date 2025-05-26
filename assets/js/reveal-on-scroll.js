function revealOnScroll() {
    let elements = document.querySelectorAll(".fade-in-animate")
    elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
            el.classList.add("visible");
        } else {
            el.classList.remove("visible");
        }
    });
}

document.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);