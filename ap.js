window.onload = () =>{
	// on va chercher tous les éléments
	const elts = document.querySelectorAll(".accordion-element");
	// on récupère l'element actif
	const firstActive = document.querySelector(".accordion .active"); 
	// on va chercher la balise p qui se touve à l'interieur
	let section = firstActive.children[1].querySelector("p");

	// on récupère la hauteur de section
	let sectionHeight = section.offsetHeight + 20;

	// on definit la hauteur de .accordion-content
	firstActive.children[1].style.height = sectionHeight+"Px";


	for(let elt of elts){
		elt.addEventListener("click", function(){
			// on récupère l'element actif
			const active = document.querySelector(".accordion .active");
			 // on lui retire la classe "active"
			 active.classList.remove("active");
			 // on lui reduit saa hauteur
			 active.children[1].style.height = 0;

			 // on met la classe active à l'element cliqué
			 this.classList.add("active");

			 // on récupère la hauteur de la balise P
			 let section = this .children[1].querySelector("p");

	// on récupère la hauteur de section
	let sectionHeight = section.offsetHeight + 20;

	// on definit la hauteur de .accordion-content
	this.children[1].style.height = sectionHeight+"Px";


		});

	}
}
