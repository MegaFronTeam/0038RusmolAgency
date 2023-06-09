"use strict";


function eventHandler() { 
  let dropdownBtns = document.querySelectorAll('.dropdown-btn');
  
  if(dropdownBtns.length > 0) {
    for (let dropdownBtn of dropdownBtns) {
      dropdownBtn.addEventListener('click', function () {
        dropdownBtn.classList.toggle('active');
        dropdownBtn.nextElementSibling.classList.toggle('active');
      });
    }
  };
};

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}