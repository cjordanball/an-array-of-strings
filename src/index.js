// import Text from '../assets/text/introduction.js';

// const articleElement = document.createElement('article');
// articleElement.innerHTML = Text.article1;

// console.log(articleElement);

// const articleSection = document.getElementsByClassName('articleSection');

// articleSection[0].appendChild(articleElement);

function myFunction() {
	const inputVal = document.getElementById('passwordInput');
	if (inputVal.value === 'toast') {
		return true;
	} else {
		return false;
	}
}
