const usersNumber = 10;

// version 1: using fetch
fetch(`https://randomuser.me/api/?results=${usersNumber}`)
	.then(response => response.json())
	.then((json) => {
		const peopleElement = document.querySelector('#people');
		for (let user of json.results) {
			createPerson(peopleElement, user.name.first, user.name.last, user.picture.large);
		}
	});

const createPerson = (peopleElement, firstName, lastName, picture) => {
	const personElement = document.createElement('div');
	personElement.className = 'person';

	const pictureElement = document.createElement('img');
	pictureElement.src = picture;
	pictureElement.alt = firstName + ' ' + lastName;
	personElement.appendChild(pictureElement);

	const nameElement = document.createElement('div');
	nameElement.className = 'name';
	const firstNameElement = document.createElement('span');
	firstNameElement.textContent = firstName;
	nameElement.appendChild(firstNameElement);
	const lastNameElement = document.createElement('span');
	lastNameElement.textContent = lastName;
	nameElement.appendChild(lastNameElement);
	personElement.appendChild(nameElement);

	peopleElement.appendChild(personElement);
};

// version 2: using async await
// async function getFriends() {
// 	const response = await fetch(`https://randomuser.me/api/?results=${usersNumber}`);
// 	const friends = await response.json();
// 	const peopleElement = document.querySelector('#people');
// 	friends.results.forEach((friend) => {
// 		createPerson(peopleElement, friend.name.first, friend.name.last, friend.picture.large);
// 	});
// }

// getFriends();
