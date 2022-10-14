console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


// Picture alert
let picAlert = document.querySelector('img')

function pictureAlert(){
	alert('Hey good looking!')
}

picAlert.addEventListener('mouseover', pictureAlert)
