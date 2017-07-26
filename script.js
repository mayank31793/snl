setTimeout(function(){document.getElementById('playIn').play();},1000);

var buttonValue;
var namePlayer1;
var namePlayer2;

function gridSelect(val){
	buttonValue = val.value;
	console.log('val '+buttonValue);
}

function hideDiv(){
	if(buttonValue==undefined || document.getElementById('p1').value==""
 		|| document.getElementById('p2').value==""
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
		var elem = document.createElement('div');
		elem.className = "elemStyle";
		document.getElementById('gameId').appendChild(elem);
	}
}
