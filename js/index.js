var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input-text');
var elInputTwo = document.querySelector('.input-ball');
var elText = document.querySelector('.text');

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	if (elInputTwo.value < 0) {
		alert("iltimos 0 dan katta son kiriting")
	}
	else if (isNaN(elInputTwo.value)) {
		elText.textContent = `${elInput.value} iltimos son kiriting :)`;
	} else if (elInputTwo.value >= 100) {
		elText.textContent = `${elInput.value} tabriklaymiz siz butjetga kirdingiz :)`;
	} else if (elInputTwo.value >= 60) {
		elText.textContent = `${elInput.value} tabriklaymiz siz kantraktga kirdingiz :)`;
	} else if (elInputTwo.value >= 30) {
		elText.textContent = `${elInput.value} tabriklaymiz siz super kantraktga kirdingiz :)`;
	} else {
		elText.textContent = `${elInput.value} kengi yil qayta urinib ko\'ring`;
	}
});