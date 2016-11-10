let firstPlayer = "First player";
let secondPlayer = "Second player";

let firstPlayerScore = startGameForPlayer(firstPlayer);
let secondPlayerScore = startGameForPlayer(secondPlayer)

chooseWinner(firstPlayerScore, secondPlayerScore);





function startGameForPlayer(player) {
	let shouldGenerateNExtNumber = true;
	let number, score = 0, command;
	
	while(true) {
		if (shouldGenerateNExtNumber){
			number = getRandomNumberUpToEleven();
			score += number;
			shouldGenerateNExtNumber = false;
		}

		command = getNotificationMessage(player, number, score);

		if(command === 'N' || score > 21) {
			return score;
		} else if(command == 'Y') {
			shouldGenerateNExtNumber = true;
		} else {
			alert('Not correct command. Please enter Y/N');
		}
	}
}

function getRandomNumberUpToEleven() {
	let min = 1;
	let max = 11;
	let random = Math.random() * (max - min) + min;
	return Math.round(random);
}

function getNotificationMessage(player, number, score) {
	return prompt(`${player}!\nYour generated number is ${number}, and your score is ${score}.\nWould you like to continue the game?\nPlease enter Y/N :`);
}

function chooseWinner(firstPlayerScore, secondPlayerScore) {
	if((firstPlayerScore > 21 && secondPlayerScore > 21) || firstPlayerScore == secondPlayerScore){
		alert('Draw!');
	} else if (firstPlayerScore > 21 ^ secondPlayerScore > 21) {
		secondPlayerScore > 21 ? alert("First player win!") : alert("Second player win!");
	} else {
		firstPlayerScore > secondPlayerScore ? alert("First player win!") : alert("Second player win!");
	}
}