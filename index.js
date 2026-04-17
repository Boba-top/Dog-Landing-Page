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

// 🔹 la click → schimbă și salvează tema
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    // salvează tema
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // schimbă icon
    themeBtn.textContent = isDark ? "☀️" : "🌑";
});


// 🔹 la refresh → aplică tema salvată
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌑";
    }
});

function showOnlyThis(card) {
    // 1️⃣ Ascunde tot ce nu e navbar sau search bar
    const allSections = document.body.querySelectorAll("body > *:not(nav):not(#searchInput):not(#theme-button)");
    allSections.forEach(el => el.style.display = "none");

    // 2️⃣ Creează container pentru card
    const focusDiv = document.createElement("div");
    focusDiv.style.display = "flex";
    focusDiv.style.flexDirection = "column";
    focusDiv.style.alignItems = "flex-start";   // fixează în stânga
    focusDiv.style.margin = "20px 0 0 20px";    // sub search bar

    // 3️⃣ Clonează card-ul
    const clone = card.cloneNode(true);
    clone.style.width = "250px";      // dimensiune fixă, rezonabilă
    clone.style.transform = "scale(1)"; // fără mărire exagerată
    clone.style.cursor = "pointer";

    // 4️⃣ La click pe imagine → revine la vizualizare normală
    clone.onclick = () => location.reload();

    // 5️⃣ Adaugă card-ul în container
    focusDiv.appendChild(clone);
    document.body.appendChild(focusDiv);
}