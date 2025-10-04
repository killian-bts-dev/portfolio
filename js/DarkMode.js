document.addEventListener("DOMContentLoaded", function () {
    let darkModeButton = document.getElementById("toggleDarkMode");

    if (darkModeButton) { // Vérifie si le bouton existe
        darkModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Sauvegarde la préférence utilisateur
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
        });

        // Applique la préférence sauvegardée
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }
    } else {
        console.error("Bouton 'toggleDarkMode' introuvable !");
    }
});