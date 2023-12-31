const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let baliseBannerImg = document.querySelector(".banner-img");
let baliseBannerTagLine = document.querySelector("#banner p");
let idFleche = 0;
const pathFileImg = "./assets/images/slideshow/";


function insertSlider (Id, TabSlider) {
	let Slider = TabSlider[Id];
	let SliderImg = Slider.image;
	let SliderTagLine = Slider.tagLine;
	console.log(SliderImg,SliderTagLine);
	console.log(baliseBannerImg.src);
	baliseBannerImg.src = pathFileImg+SliderImg;
	baliseBannerTagLine.innerHTML = SliderTagLine;
	bullet(Id);
	idFleche = Id;
}


let baliseArrowLeft = document.querySelector(".arrow_left");
baliseArrowLeft.onclick = () => {
	if (idFleche === 0){
		idFleche = (slides.length - 1);
	} else {
		idFleche--;
	}
	console.log(idFleche);
	insertSlider(idFleche,slides);
}

let baliseArrowRight = document.querySelector(".arrow_right");
baliseArrowRight.onclick = () => {
	if (idFleche === (slides.length - 1)){
		idFleche = 0;
	} else {
		idFleche++;
	}
	console.log(idFleche);
	insertSlider(idFleche,slides);
}

// Affiches des points slider selon le nombre de diapo

let baliseDivDots = document.querySelector(".dots");
function bullet(item) {
	let baliseADots;
	baliseDivDots.innerHTML = '';
	for (i=0; i<slides.length; i++) {
		if (i === item) {
			baliseADots = `<a onclick="insertSlider(${i},slides)" href="#" class="dot dot_selected")></a>`;
		} else {
			baliseADots = `<a onclick="insertSlider(${i},slides)" href="#" class="dot")></a>`;
		}
		console.log(baliseADots);
		baliseDivDots.innerHTML += baliseADots;
	}
}

// Initialisation du bullet au démarrage
bullet(0);