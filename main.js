// Sélection du formulaire
const loginForm = document.getElementById('loginForm');

// Ajout d'un écouteur d'événements pour le formulaire
loginForm.addEventListener('submit', function(event) {
  // Empêche le rechargement de la page lors de la soumission du formulaire
  event.preventDefault();

  // Récupération des valeurs des champs
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Affichage des valeurs dans la console
  console.log("Nom d'utilisateur :", username);
  console.log("Mot de passe :", password);

  // Optionnel : Affichage d'un message de succès dans la console
  console.log("Connexion réussie !");
});
