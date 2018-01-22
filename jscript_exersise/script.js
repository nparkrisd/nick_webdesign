
var hashtag = "#";

for(var i = 0; i<8; i++){
	console.log(hashtag)
	hashtag = hashtag + "#";
	
}

for(var j = 1; j<101; j++){
	if( (j%3 == 0)&&(j%5 == 0) ){
		console.log('BuzzFizz');
	}
	else if( (j%3) == 0 ){
		console.log('Fizz');
	}else if( (j%5) == 0 ){
		console.log('Buzz');
	}

	else{
		console.log(j);
	}

}

var board = "";

for(var k = 1; k<65; k++){
	console.log(k);
	if( (k%9)==0 ){
		console.log(k%8);
		board = board + "\n";
	}if( (k%2)==0 ){
		console.log(k%2);
		board = board + "#";
	}
	board = board + " ";
}

console.log(board);













