window.addEventListener('load', function(){
	var button = document.querySelector('.startNewGame');
	var field = document.querySelector('.field');
	var cells = document.querySelectorAll('.cell');
	var winnerMessage = document.querySelector('winner-message');

	var nextMove = 'x';

	button.addEventListener('click', function startNewGame(){
		for(var i = 0; i < cells.length; i++){
			cells[i].classList.remove('x');
			cells[i].classList.remove('o');
		}
	nextMove = 'x';	// сброс для начала новой игры
	winnerMessage.innerHTML = '';
	});

	field.addEventListener('click', function handleCellClick(e){
		if(!e.target.classList.contains('cell') ||
		 e.target.classList.contains('x') ||
		 e.target.classList.contains('o')){	// Проверка на клик по ячейке и заполненность
			return;
		}

		var winner = getWinner();
		if (winner){	// проверка на победителя
			return;
		}

		//e.target// Элемент, по которому кликнули
		e.target.classList.add(nextMove);
		if (nextMove === 'x'){
			nextMove = 'o';
		}else{
			nextMove = 'x';
		}

		winner = getWinner();
		if (winner === 'x'){
			winnerMessage.innerHTML = "Победил крестик";
		}else{
			winnerMessage.innerHTML = "Нолик победил";
		}

	});
});