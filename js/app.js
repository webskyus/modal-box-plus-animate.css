window.addEventListener('DOMContentLoaded', function () {

	'use strict';


	let modalBox = document.querySelector('.overlay'),
			modalBtnCall = document.querySelector('.page-wrapper__btn'),
			select = document.querySelector('.page-wrapper__select'),
			getValue,
			modalBoxInner = document.querySelector('.overlay-wrapper .page-wrapper'),
			modalBtnCloser = document.querySelector('.page-wrapper__closer');


	modalBtnCall.addEventListener('click', function() {
		modalBox.style.display = 'block';
		document.body.style.overflow = 'hidden';
		getValue = select.value;
		modalBoxInner.classList.add(getValue);
		modalBoxInner.classList.add('animated');	
		setTimeout(function() {
			modalBoxInner.classList.remove(getValue);
		}, 1000);
		
	});


	modalBtnCloser.addEventListener('click', function() {
		modalBox.style.display = '';
		document.body.style.overflow = '';
		modalBoxInner.classList.remove(getValue);
		modalBoxInner.classList.remove('animated');
	});






});