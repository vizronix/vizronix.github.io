function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var closeBtn = document.querySelector(".close-btn");
    var toggleBtn = document.querySelector(".toggle-btn");

    if (sidebar.style.left === "1500px" || sidebar.style.left === "") {
        sidebar.style.left = "0px";
        closeBtn.style.display = "block";
        toggleBtn.style.display = "none";
    } else {
        sidebar.style.left = "1500px";
        closeBtn.style.display = "none";
        toggleBtn.style.display = "block";
    }
}
