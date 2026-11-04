
const text = document.querySelector("#source-text");
const button = document.querySelector("#go");
const result = document.querySelector("#result-text");

button.addEventListener("click", () => {
    const inputText = text.value;
    const splitText = inputText.split("");

    result.innerHTML = "";

    splitText.forEach(function(letter, index) {
        const img = document.createElement("img");

        if (letter>= "a" && letter <= "z") {
            img.src = `./images/small_${letter}.png`;
        }

        else if (letter>= "A" && letter<= "Z") {
            img.src = `./images/${letter}.png`
        }

        else if (letter === " ") {
            const space = document.createElement("span");
            space.textContent = "\u00A0";
            space.style = `--anim-delay:${index*0.1}s`
            result.appendChild(space);
            return;
        }

        else {
            const Node = document.createElement("span");
            Node.textContent = letter;
            Node.style = `--anim-delay:${index*0.1}s`
            result.appendChild(Node);
            return;
        }

            img.style = `--anim-delay:${index*0.1+0.1}s`
            
        result.appendChild(img);
    });
});
