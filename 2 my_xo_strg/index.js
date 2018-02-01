/*
localStorage.setItem('data', JSON.stringify(state)); //сохраняем объект

var data = localStorage.getItem('data'); //Извлечение из localStorage
if(data){	// Если что-то есть
	state = JSON.parse(data); // преобразование из строки в объект
} 
*/
var state = {
	'msg': '',
	'field': {},
	'simbol': 'x',
};
		// var serData = localStorage.getItem('data'); //Извлечение из localStorage
		// console.log(data);
		// var data = JSON.parse(serData);
		// console.log(data);

var data = localStorage.getItem('data'); //Извлечение из localStorage
console.log('Восстановленные данные ' + data);
if(data){	// Если что-то есть
	state = JSON.parse(data); // преобразование из строки в объект
} 

window.addEventListener('load', function(){
	var i;
	var winner;
	var simbol = state.simbol;
	var newGame = document.querySelector('.startNewGame');
	var cellsD = document.querySelectorAll('.cell');
	var field = document.querySelector('.field');
	var winnerMsg = document.querySelector('.winner-message');
	var body = document.querySelector('body');
	update();
	


	newGame.addEventListener('click', clearAll); // Очищение при старте


	field.addEventListener('click', function handleCellClick(e){
		if(!e.target.classList.contains('cell') || // клик не по ячейке 
			e.target.classList.contains('x') || // клик по занятой ячейке
			e.target.classList.contains('o') ||
			winner !== undefined){ // игра закончилась
			return;
		}

		e.target.classList.add(simbol);
		simbol = simbol === 'x' ? 'o' : 'x';

		winner = getWinner();
		if(winner === 'x'){
			winnerMsg.innerHTML = 'Победил крестик';
		}else
		if (winner === 'o'){
			winnerMsg.innerHTML = 'Победил нолик';
		}else
		if(winner === 'no'){
			winnerMsg.innerHTML = 'Победила дружба';
		}

		save();
		//update();

	});

	function update(){
		// очистить всё
		clearAll();
		// заполнить победителя
		winnerMsg.innerHTML = state.msg;
		winner = state.winner;
		// удалить поле
		field.parentNode.removeChild(field);
		// заполнить поле
		var el = document.createElement('div');
		el.classList.add('field');
		el.innerHTML = state.field;
		body.appendChild(el);
		cellsD = document.querySelectorAll('.cell');
		field = document.querySelector('.field');
		winnerMsg = document.querySelector('.winner-message');

	}

	function clearAll(){
		// очистить победителя
		winnerMsg.innerHTML = '';
		// очистить поле
		for(i = 0; i < cellsD.length; i++){
			cellsD[i].classList.remove('x');
			cellsD[i].classList.remove('o');
		}
		winner = undefined; // затираем прошлого победителя
	}

	function save(){
		state.msg = winnerMsg.innerHTML;
		state.field = field.innerHTML;
		state.simbol = simbol;
		state.winner = winner;
		var serState = JSON.stringify(state);

		localStorage.setItem('data', serState);
	}

});