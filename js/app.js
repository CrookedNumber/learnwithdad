$(function(){
  var i,j;
  var count = 0;
  var sets = {};
  var set = 'letters';
  var active = [];
  var rewardInterval = 5;
  var maxNumber = 9;
  var maxAddition = 9
  var maxSubtraction = 9;
  var totalRewards = 17;

  sets.letters = [];
  for (i=0; i<26; i++) {
    sets.letters.push(String.fromCharCode(65 + i));
  }
  sets.numbers = [];
  for (i=1; i<=maxNumber; i++) {
    sets.numbers.push(i);
  }
  sets.addition = [];
  for (i=1; i<maxAddition; i++) {
    for (j=1; j<maxAddition; j++) {
	  sets.addition.push(i+"+"+j);
    }
  }
  sets.subtraction = [];
  for (i=1; i<maxSubtraction; i++) {
    for (j=1; j<maxSubtraction; j++) {
	  if (i>=j) {
	    sets.subtraction.push(i+"-"+j);
      }
    }
  }

  active = shuffle(sets[set]);

  $("div.card").html(active[count]);
  $("div.card").on("tap", cardTap);
  
  function cardTap(event) {
	var r, card, img;
  	count++;
	if (count % rewardInterval === 0) {
	  img = Math.floor(Math.random()*totalRewards) + 1;
	  card = "<img src='/images/" + img  + ".jpg'>";
  	}
	else {
	  var card = active[count % active.length];
	}
    $("div.card").html(card);
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
});