// Your JS goes here

for(var i=0; i<100; i++){
	var newDiv = document.createElement("div"); 
	newDiv.style.float = "left";
	newDiv.style.paddingBotom = "11.1%";
	newDiv.style.width = "11.1%";
	newDiv.style.height = "150px";	

	if(i%2 === 0){
		newDiv.style.background = getGradient();
		document.body.appendChild(newDiv);
	}else{
		newDiv.style.background = getGradient();
		document.body.appendChild(newDiv);
	}
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getGradient(){
	return "linear-gradient(to right, " +getRandomColor() +"," + getRandomColor() +" )";
}