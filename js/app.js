$(function(){
  var i,j;
  var sets = {};
  var set = 'letters';

  sets.letters = [];
  for (i=0; i<26; i++) {
    sets.letters.push(String.fromCharCode(65 + i));
  }
  sets.numbers = [];
  for (i=1; i<10; i++) {
    sets.numbers.push(i);
  }
  sets.addition = [];
  for (i=1; i<10; i++) {
    for (j=1; j<10; j++) {
	  sets.addition.push(i+"+"+j);
    }
  }
  sets.subtraction = [];
  for (i=1; i<10; i++) {
    for (j=1; j<10; j++) {
	  if (i>=j) {
	    sets.subtraction.push(i+"-"+j);
      }
    }
  }

  var count = 0;
  $("div.card").html(sets[set][0]); // todo, grab first, not 0

  $("div.card").on("tap", cardTap);
  
  function cardTap(event) {
	var r, letter, img;
  	count++;
  	if (count % 5 === 0) {
	  img = Math.floor(Math.random()*13) + 1;
	  letter = "<img src='/images/" + img  + ".jpg'>";
  	}
	else {
	  var r=Math.floor(Math.random()*sets[set].length);
	  var letter = sets[set][r];
	}
    $("div.card").html(letter);
  }
});