// once the tree DOM has loaded
document.addEventListener('DOMContentLoaded', _ => {
	const btn = document.querySelector('#toggle-rectangle');
	const rect = document.querySelector('.rectangle');

// gestion cacher / afficher un rectangle
	btn.addEventListener('click', () => {
		// appeler la bonne méthode de classList sur QUOI ?
		// celle qui gère automatiquement l'application d'une classe css en fonction de ce qu'elle est déjà appliquée ou non
		rect.classList.toggle("hide")});



	rect.addEventListener('mouseover', () => {
		rect.classList.replace("rectangle", "good");})

	rect.addEventListener('mouseout', () => {
		rect.classList.replace("good", "rectangle");
		rect.classList.replace("important", "rectangle");})


	rect.addEventListener('dblclick', () => {
		rect.classList.replace("good", "important");})
	})
