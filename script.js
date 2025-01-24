document.addEventListener("DOMContentLoaded", () => {
    let mode = document.querySelector("#Change-Mode")
    let currentmode = "light"

    mode.addEventListener("click", () => {
        if (currentmode === "light") {
            currentmode = "dark"
            document.body.style.backgroundColor = "black"
            mode.innerHTML = "Light-mode"

            let images = document.querySelectorAll("img");
            images.forEach(img => {
                img.style.border = "2px solid white";
            });
        } else {
            currentmode = "light"
            document.body.style.backgroundColor = "white"
            mode.innerHTML = "Dark-mode"
            
            let images = document.querySelectorAll("img");
            images.forEach(img => {
                img.style.border = "2px solid black";
            });
        }
    })
})