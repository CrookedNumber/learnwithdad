$(function(){

  init();

  function init() {
    var i,j;
    var active_index = 0;
    var count = 1;
    var sets = {};
    var active = [];
    var totalRewards = 17;
    var set = $.cookie("set") || "letters_upper";
    var rewards = [];
    var settings = {
      set: set,
      changeColors: $.cookie("changeColors") || "1",
      rewardInterval: parseInt($.cookie("rewardInterval")) || 5,
      maxNumber: parseInt($.cookie("maxNumber")) || 10,
      maxAddition: parseInt($.cookie("maxAddition")) || 10,
      maxSubtraction: parseInt($.cookie("maxSubtraction")) || 10
    };

    // Re-set settings form elements
    $("#" + set).prop("checked", "checked").checkboxradio("refresh");
    var checked = (settings.changeColors === '1');
    $("#changeColors").prop('checked', checked).checkboxradio("refresh");

    $("#rewardInterval option[value='" + settings.rewardInterval + "']").prop("selected", true);    
    $("#rewardInterval").selectmenu('refresh', true);

    $("#maxNumber option[value='" + settings.maxNumber + "']").prop("selected", true);
    $("#maxNumber").selectmenu('refresh', true);

    $("#maxAddition option[value='" + settings.maxAddition + "']").prop("selected", true);
    $("#maxAddition").selectmenu('refresh', true);

    $("#maxSubtraction option[value='" + settings.maxSubtraction + "']").prop("selected", true);
    $("#maxSubtraction").selectmenu('refresh', true);

    sets.letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    sets.letters_lower = "abcdefghijklmnopqrstuvwxyz".split('');
  
    sets.numbers = [];
    for (i=1; i<=settings.maxNumber; i++) {
      sets.numbers.push(i);
    }
    sets.addition = [];
    for (i=1; i<settings.maxAddition; i++) {
      for (j=1; j<settings.maxAddition; j++) {
        sets.addition.push(i+"+"+j);
      }
    }
    sets.subtraction = [];
    for (i=1; i<settings.maxSubtraction; i++) {
      for (j=1; j<settings.maxSubtraction; j++) {
        if (i>=j) {
          sets.subtraction.push(i+"-"+j);
        }
      }
    }

    for (i=1; i<=totalRewards; i++) {
      rewards.push(i);
    }

    active = shuffle(sets[set]);
    rewards = shuffle(rewards);
  
    $("div.card").html(active[active_index]);
    setCardColor();

    $("div.card").on("swipeleft", cardSwipe);
    $("div.card").on("swiperight", cardSwipe);
    
    function cardSwipe(event) {
      var increment = (event.type == 'swiperight') ? 1 : -1;
      var card, img;

      // Can't swipeleft into a non-positive count
      if (increment == -1 && count == 1) {
        return;
      }

      count += increment;
      if (count % settings.rewardInterval === 0) {
        img = ((count / settings.rewardInterval) - 1) % rewards.length;
        card = "<img src='/images/" + rewards[img]  + ".jpg'>";
      }
      else {
        active_index += increment;
        if (active_index >= active.length) {
          active_index = 0;
        }
        if (active_index < 0) {
          active_index = active.length - 1;
        }
        card = active[active_index];
        setCardColor();
      }
      $("div.card").html(card);
    }
  
    function setCardColor() {
      var color;
      if (settings.changeColors == '1') {
        color = randomHex()
      }
      else {
        color = '#000000';
      }
      $("div.card").css("color", color);
    }
  
    function randomHex() {
      return '#' + Math.random().toString(16).substr(-6);
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
  }
  $("#settings").on("panelclose", function(event, ui) {
    init();
  }); 
});