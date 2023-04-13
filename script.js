const icn = document.querySelector(".icn"),
sideNav = document.querySelector(".nav-phone"),
setHeight = () => {
    const currentHeight = window.innerHeight, 
    currentWidth = window.innerWidth;
    document.body.style.height = `${currentHeight}px`;
    document.body.style.width = `${currentWidth}px`;
}

window.addEventListener("resize", setHeight);
setHeight();

icn.onclick = () => {
    icn.classList.toggle("hovered");
    sideNav.classList.toggle("show")
}

