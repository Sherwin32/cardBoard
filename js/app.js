var cardList = [];


$(document).ready(function() {

	console.log("I'm in");
	var board = new GameBoard(24);
	board.setGame();
	// console.log($('.box').attr("index"));
	$('.box').on('click', flipCard)

});



function isMatch(cardListIn){

	if(cardListIn[0]===cardListIn[1]){
		console.log("yay! isMatch!");
		setTimeout(function(){
			cardList = [];
			// $('.box').removeClass("clicked");
			// $(".box").css('background-image', 'url("img/dog-v-cat.jpg")');
			$('.box').removeClass("flipInY");
			$(`.box[card="${cardListIn[0]}"]`).css('background-image', 'url("")');
			$(`.box[card="${cardListIn[0]}"]`).css('background-image', 'white');

		},800);
		// return true;

		// alert("123");
	}else{
		console.log("keep trying");
		setTimeout(function(){
			$(`.box[card="${cardListIn[0]}"]`).removeClass("clicked");
			$(`.box[card="${cardListIn[1]}"]`).removeClass("clicked");
			$(`.box[card="${cardListIn[0]}"]`).css('background-image', 'url("img/dog-v-cat.jpg")');
			$(`.box[card="${cardListIn[1]}"]`).css('background-image', 'url("img/dog-v-cat.jpg")');
			cardList = [];
			// $('.box').removeClass("clicked");
			// $(".box").css('background-image', 'url("img/dog-v-cat.jpg")');
			$('.box').removeClass("flipInY");
		},800);
		// return false;
		// alert("123");


	}
}

function flipCard(){
	if(!$(this).hasClass("clicked")&&cardList.length!==2){
		$(this).addClass("clicked");
		var cardId = $(this).attr("card");
		console.log(cardId);
		var cardImg = `img/${cardId}.jpg`;
		$(this).css('background-image', `url("${cardImg}")`)
		$(this).addClass("flipInY");
		if(cardList.length!==2){
			cardList.push($(this).attr("card"));
			console.log(cardList);
			if(cardList.length===2){
				isMatch(cardList)
			}
	}
}}


function GameBoard(cardNum){
    this.cardNum = cardNum;
    
}

GameBoard.prototype.setGame = function(){
	$(".box").css('background-image', 'url("img/dog-v-cat.jpg")');
    var array = [];
    for(var i=1; i<=12; i++){
    	array.push(i);
    	array.push(i);
    }
    array = shuffle(array);

    for(var i=1; i<=array.length; i++){
    	console.log($('.box[index="'+i+'"]').attr(""));
    	$('.box[index="'+i+'"]').attr("card", array[i-1]);
    	console.log(array[i-1]);
    }
}

function Card(index){
    this.flipped = false;
    this.index = index;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}