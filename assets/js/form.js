var id = 0;
var price = 0;

const wrapper = document.querySelector('.form__radios');
wrapper.addEventListener('click', handleClick);

function handleClick(e) {
	let isChecked = document.getElementsByClassName('checked');
	if (isChecked.length) {
		isChecked[0].classList.add('unchecked');
		isChecked[0].classList.remove('checked'); 
	}
		
	if (id != e.target.id) {
		id = e.target.id;
		changePlan();
		toggleRadio(e.target.parentElement);
		valueChange();
	}
}

function toggleRadio(el) {
	el.classList.add('checked');
	el.classList.remove('unchecked')
}

function changePlan() {
	let plan = document.getElementsByClassName('selected')[0];
	let str = plan.textContent;
	if (id){
		plan.textContent = str.slice(0, -1) + id;
	}
}

const numbers = document.querySelector('.numbers');
numbers.addEventListener('change', valueChange);

function valueChange (e) {
	if (id) {
		switch (+id) {
			case 1:
				price = 13;
				break;
			case 2:
				price = 22;
				break;
			case 3:
				price = 34;
				break;
		}
	}
		
	const total = document.querySelector(".total > span:nth-child(2)");
	total.textContent = "$" + numbers.value * price;
}

