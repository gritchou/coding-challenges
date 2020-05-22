const animals = document.querySelector('.all-animals');
const mammals = document.querySelector('#only-mammals');
for (let animal of animals.children) {
	if (animal.querySelector('.mammal-value').innerHTML === 'true') {
		const mammal = animal.cloneNode(true);
		mammals.appendChild(mammal);
	}
}
