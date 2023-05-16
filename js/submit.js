const content = document.querySelector('.select');
const thankYou = document.querySelector('.thank-you');
const submit = document.querySelector('.submit');

function complete() {
	content.style.display = 'none';
	thankYou.style.display = 'flex';

	var selectedButton = document.querySelector('.Rate.selected');
	var ratingSpan = document.getElementById('rating');

	if (selectedButton) {
		var rating = selectedButton.textContent;
		ratingSpan.textContent = rating;
	} else {
		ratingSpan.textContent = 'No rating';
	}
}

submit.addEventListener('click', complete);

var buttons = document.querySelectorAll('.Rate');

buttons.forEach(function (button) {
	button.addEventListener('click', function () {
		buttons.forEach(function (btn) {
			btn.classList.remove('selected');
		});
		this.classList.add('selected');
	});
});
