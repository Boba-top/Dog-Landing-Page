function searchDog() {
    const breedValue = document.getElementById("searchInput").value.toLowerCase().trim();
    const BREED_URL = "https://dog.ceo/api/breed/" + breedValue + "/images/random";

    fetch(BREED_URL)
        .then(res => res.json())
        .then(data => {
            if(data.status === "success") {
                const dogImage = document.createElement("img");
                dogImage.setAttribute("src", data.message);
                dogImage.setAttribute("alt", breedValue);
                dogImage.setAttribute("class", "breed-image");

                const breedSection = document.getElementById("breed-section");
                breedSection.innerHTML = "";
                breedSection.appendChild(dogImage);
            } else {
                alert("Rasa nu există 😢");
            }
        })
        .catch(err => {
            alert("A apărut o eroare 😢");
            console.log(err);
        });
}