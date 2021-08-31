const cssOutput = document.querySelector("h4");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const body = document.getElementById("gradient")


const setGradient = () => {
    body.style.background =
        `linear-gradient(
        to right, 
        ${color1.value}, 
        ${color2.value})`;

    cssOutput.textContent = body.style.background + ";";

}

console.log(cssOutput);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
