function searchDog() {
    const breedValue = document.getElementById("searchInput").value.toLowerCase().trim();
    const BREED_URL = "https://dog.ceo/api/breed/" + breedValue + "/images/random";

    fetch(BREED_URL)
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                const dogImage = document.createElement("img");
                dogImage.setAttribute("src", data.message);
                dogImage.setAttribute("alt", breedValue);
                dogImage.setAttribute("class", "breed-image");

                const breedSection = document.getElementById("breed-section");
                breedSection.innerHTML = "";
                breedSection.appendChild(dogImage);
            } else {
                alert("Rasa nu există ");
            }
        })
        .catch(err => {
            alert("A apărut o eroare ");
            console.log(err);
        });
}
const themeBtn = document.getElementById("theme-button");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    themeBtn.textContent = isDark ? "☀️" : "🌑";
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌑";
    }

    getDogFact();
});

async function getDogFact() {
    try {
        const response = await fetch("https://dogapi.dog/api/v2/facts");
        const data = await response.json();

        const fact = data.data[0].attributes.body;

        document.getElementById("dog-fact").textContent = fact;
    } catch (error) {
        document.getElementById("dog-fact").textContent = "Couldn't load dog fact 🐶";
        console.log(error);
    }
}

