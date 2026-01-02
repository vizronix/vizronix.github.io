// Navbar scroll effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.style.background = window.scrollY > 50 
        ? "rgba(0,0,0,0.85)" 
        : "rgba(0,0,0,0.6)";
});
