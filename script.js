setTimeout(function(){document.getElementById('playIn').play();},1000);

var buttonValue;
var namePlayer1;
var namePlayer2;
var clickDice = 0;

function gridSelect(val){
	buttonValue = val.value;
	console.log('val '+buttonValue);
}

function hideDiv(){
	if(buttonValue==undefined || document.getElementById('p1').value==""
 		|| document.getElementById('p2').value=="" || 
 		document.getElementById('p1').value==document.getElementById('p2').value
	){
		window.location.reload();
	}
	namePlayer1 = document.getElementById('p1').value;
	console.log(namePlayer1);
	namePlayer2 = document.getElementById('p2').value;
	console.log(namePlayer2);
	document.getElementById('detailsId').style.display = "none";
	console.log("hide");
	document.getElementById('gameId').classList.remove("gameClass1");
	console.log('button value is '+buttonValue);
	document.getElementById('playOut').play();
	for(var i=0;i<buttonValue;i++){	

		if(buttonValue==36){
			if((i+1)%6==0){
				var elem = document.createElement('div');
				var elemBr = document.createElement('br');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
				document.getElementById('gameId').appendChild(elemBr);
			}
			else{
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
			}
		}

		if(buttonValue==64){
			if((i+1)%8==0){
				var elem = document.createElement('div');
				var elemBr = document.createElement('br');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
				document.getElementById('gameId').appendChild(elemBr);
			}
			else{
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);				
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
			}
		}

		if(buttonValue==100){
			if((i+1)%10==0){
				var elem = document.createElement('div');
				var elemBr = document.createElement('br');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
				document.getElementById('gameId').appendChild(elemBr);
			}
			else{
				var elem = document.createElement('div');
				var text = document.createTextNode(i+1);
				elem.appendChild(text);
				elem.className = "elemStyle";
				document.getElementById('gameId').appendChild(elem);
			}
		}		

	}
}

function DiceRoll(){
	clickDice+=1;
	console.log(clickDice);
	if(clickDice%2==0){
		document.getElementById('playerTurn').innerHTML = "Turn: "+document.getElementById('p1').value;
	}
	else{
		document.getElementById('playerTurn').innerHTML = "Turn: "+document.getElementById('p2').value;
	}
	var random = Math.floor((Math.random() * 6) + 1);
	document.getElementById('diceRollValue').innerHTML = random;
}