function createPlayer(name) {
	let score = 0;
	const win = () => score++;
	const getScore = () => score;
	return { name, win, getScore };
}

function startGame(p1name, p2name) {
	playerOne = createPlayer(p1name ? p1name : "Player 1");
	playerTwo = createPlayer(p2name ? p2name : "Player 2");
	winnername = document.getElementById("dispwinner");
	winnername.textContent = "";
	const scoreBoard = () => playerOne.getScore() + playerTwo.getScore();
	gameBoard = {
		1: "",
		2: "",
		3: "",
		4: "",
		5: "",
		6: "",
		7: "",
		8: "",
		9: "",
	};

	const validLocation = new RegExp("^[1-9]$");
	function changeTurn(turn) {
		if (turn == "X") {
			turn = "O";
		} else {
			turn = "X";
		}
		return turn;
	}

	function checkWin(b) {
		// b is the variable for the gameBoard
		if ((b[1] && b[2] && b[3] == "X") || (b[1] && b[2] && b[3] == "O")) {
			console.log("win across 1,2,3");
			return true;
		} else if (
			(b[4] == "X" && b[5] == "X" && b[6] == "X") ||
			(b[4] == "O" && b[5] == "O" && b[6] == "O")
		) {
			console.log("win across 4,5,6");
			return true;
		} else if (
			(b[7] == "X" && b[8] == "X" && b[9] == "X") ||
			(b[7] == "O" && b[8] == "O" && b[9] == "O")
		) {
			console.log("win across 7,8,9");
			return true;
		} else if (
			(b[7] == "X" && b[4] == "X" && b[1] == "X") ||
			(b[7] == "O" && b[4] == "O" && b[1] == "O")
		) {
			console.log("win across 7,4,1");
			return true;
		} else if (
			(b[8] == "X" && b[5] == "X" && b[2] == "X") ||
			(b[8] == "O" && b[5] == "O" && b[2] == "O")
		) {
			console.log("win across 8,5,2");
			return true;
		} else if (
			(b[9] == "X" && b[6] == "X" && b[3] == "X") ||
			(b[9] == "O" && b[6] == "O" && b[3] == "O")
		) {
			console.log("win across 9,6,3");
			return true;
		} else if (
			(b[7] == "X" && b[5] == "X" && b[3] == "X") ||
			(b[7] == "O" && b[5] == "O" && b[3] == "O")
		) {
			console.log("win across 7,5,3");
			return true;
		} else if (
			(b[9] == "X" && b[5] == "X" && b[1] == "X") ||
			(b[9] == "O" && b[5] == "O" && b[1] == "O")
		) {
			console.log("win across 1,5,9");
			return true;
		} else return false;
	}

	function dispBoard(gameBoard) {
		for (const [key, value] of Object.entries(gameBoard)) {
			if (key == 1) {
				var board = document.querySelector(".gameboard div:first-child");
				board.textContent = value;
			} else {
				var board = document.querySelector(
					".gameboard div:nth-child(" + key + ")"
				);
				board.textContent = value;
			}
			//console.log(`key ${key}, value ${value}`);
		}
	}
	dispBoard(gameBoard);
	let turn = "X";

	function boxClickHandler(event) {
		if (event.target.textContent == "") {
			var target = event.target;
			var parent = target.parentNode;
			var index = [].indexOf.call(parent.children, target);
			//console.log("index:", index + 1);
			gameBoard[index + 1] = turn;
			event.target.textContent = turn;
		}
		if (checkWin(gameBoard)) {
			if (turn == "X") winnername.textContent = playerOne.name + " wins";
			else console.log((winnername.textContent = playerTwo.name + " wins"));
			boxes.forEach((el) => el.removeEventListener("click", boxClickHandler));
		}
		turn = changeTurn(turn);
	}
	const boxes = document.querySelectorAll(".box");
	boxes.forEach((el) => el.addEventListener("click", boxClickHandler));
}

function resetGame() {
	console.log("game reset");
	startGame(
		document.getElementById("name1").value,
		document.getElementById("name2").value
	);
}

function beginGame() {
	console.log("game Started");
	startGame(
		document.getElementById("name1").value,
		document.getElementById("name2").value
	);
}
