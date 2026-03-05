// Contenu du nav (modifie une seule fois ici)
const navHTML = `
    <nav>
        <div class="logo">
            <img src="LOGO/PNG/LUCIEN DEVAUX VELO LOGO_LOGO PRINCIPAL BLANC.png" alt="">
        </div>

        <div class="onglets">
            <a href="index.html"><span>Accueil</span></a>
            <a href="vente.html"><span>Vente</span></a>    <!--Différents liens auquel on voudra renvoyer sur la page-->
            <a href="location.html"><span>Location</span></a>
            <a href="réparation.html"><span>Réparation</span></a>    <!--Nouveau onglet à ajouter-->
            <a href="#contacts"><span>Contacts</span></a>

        </div>
    </nav>
`;

document.getElementById("nav-container").innerHTML = navHTML;

// Surligne automatiquement le lien de la page actuelle
const liens = document.querySelectorAll(".onglets a");
liens.forEach(lien => {
  if (lien.href === window.location.href) {
    lien.classList.add("active");
  }
});
