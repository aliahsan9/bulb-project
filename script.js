const toggle = document.getElementById("toggle");
const bulb = document.getElementById("bulb");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        bulb.classList.add("on");
    } else {
        bulb.classList.remove("on");
    }
});
