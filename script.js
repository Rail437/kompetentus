const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});

const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

if (burger && navMenu) {
    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
