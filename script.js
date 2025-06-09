function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");
    const toggleBtn = document.querySelector(".toggle-btn");
    
    sidebar.classList.toggle("active");
    const isOpen = sidebar.classList.contains("active");
    
    closeBtn.style.display = isOpen ? "block" : "none";
    toggleBtn.style.display = isOpen ? "none" : "block";
    
    toggleBtn.setAttribute("aria-expanded", isOpen);
}
