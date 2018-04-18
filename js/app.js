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
	
    sets.bob_1_1 = "am at mat sat Sam".split(' ');
    sets.bob_1_2 = "Mac dad cat cad tad sad dam mad mass".split(' ');
    sets.bob_1_3 = "hog rat ram got hot rot cog ham rod dog sod Tom dot hat rag had cot Todd cod".split(' ');
    sets.bob_1_4 = "bad tag bat bag bog tab rob mob sob cob cab gab Bob".split(' ');
    sets.bob_1_5 = "and can pad pit dip rip did Tim sit it dig ran pan pin bit hit tin him hid big hip hop nip tic Don bib rid cap not pat mitt bin rim dim Pam nap in on an pot pod nod Dan tan man nag din rig map sap tap top mop rap bid".split(' ');
    sets.bob_1_7 = "jig jam jab job Jim jog win wag wit wig Jon Jan".split(' ');
    sets.bob_1_8 = "pun jug fun fin fan fog rug hug bun tug tub but rut puff fat jut fib fad gum rub fuss bus bum dug hut mud fib fit fig up pup".split(' ');
    sets.bob_1_9 = "caps cats dogs hogs fits rugs hugs pups tubs jobs fans jugs wigs wags rags naps rats rods pits pans pots bags jogs wins rubs figs cups hats".split(' ');
    sets.bob_1_10 = "Peg hen bet pen jet wet beg hem Ted den ten pet Ben red wed Bess met Meg mess ref get bed fed set Jeff".split(' ');
    sets.bob_1_11 = "let kid Kim well kit fill ax Mas tax fix six sax pill lip lad lap Jill mix ox keg box fox lot keg leg doll".split(' ');
    sets.bob_1_12 = "vet van yes zig zag zip zap zam yell vat yet yam yip yap".split(' ');

    sets.sightwords_preprimer = "a and away big blue can come down find for funny go help here I in is it jump little look make me my not one play red run said see the three to two up we where yellow you".split(' ');
    sets.sightwords_primer = "all am are at ate be black brown but came did do eat four get good have he into like must new no now on our out please pretty ran ride saw say she so soon that there they this too under want was well went what white who will with yes".split(' ');
    sets.sightwords_first = "after again an any as ask by could every fly from give giving had has her him his how just know let live may of old once open over put round some stop take thank them then think walk were when".split(' ');
    sets.sightwords_second = "always around because been before best both buy call cold does don't fast first five found gave goes green its made many off or pull read right sing sit sleep tell their these those upon us use very wash which why wish work would write your".split(' ');
    sets.sightwords_third = "about better bring carry clean cut done draw drink eight fall far full got grow hold hot hurt if keep kind laugh light long much myself never only own pick seven shall show six small start ten today together try warm".split(' ');
    sets.sightwords_nouns = "apple baby back ball bear bed bell bird birthday boat box boy bread brother cake car cat chair chicken children Christmas coat corn cow day dog doll door duck egg eye farm farmer father feet fire fish floor flower game garden girl good-bye grass ground hand head hill home horse house kitty leg letter man men milk money morning mother name nest night paper party picture pig rabbit rain ring robin school seed sheep shoe sister snow song squirrel stick street sun table thing time top toy tree watch water way wind window wood".split(' ');
    sets.sightwords_nouns.push("Santa Claus");

    for (i=1; i<=totalRewards; i++) {
      rewards.push(i);
    }

    active = shuffle(sets[set]);
    rewards = shuffle(rewards);
  
    $("div.card").html(active[active_index]);
	
    $("#counter-current").html(1);
    $("#counter-total").html(sets[set].length);
    setCardColor();

    $("div.card").on("swipeleft", cardSwipe);
    $("div.card").on("swiperight", cardSwipe);

    $(document).on("keydown", cardSwipe);
    
    function cardSwipe(event) {
      if (event.type === 'keydown' && event.which !== 37 && event.which !== 39) {
        return;
      }
      var increment = (event.type === 'swipeleft' || event.which === 39) ? 1 : -1;
      var card, img;

      // Can't swipeleft into a non-positive count
      if (increment === -1 && count == 1) {
        return;
      }

      count += increment;
      var outOfReward = (String(active_index).substr(-2) === ".5");
      var intoReward = (count % settings.rewardInterval === 0);

      // When moving out of, or into, a reward card, we use increments of .5
      // i.e., it's in purgatory, not at either index (before or after reward slot)
      active_index += (outOfReward || intoReward) ? increment * .5 : increment;
      // if index > length, wrap it around to start
      if (active_index < 0) {
        active_index = active_index + active.length;
      }
      if (active_index >= active.length) {
        active_index = active.length - active_index;
      }

      if (intoReward) {
        $("#counter").hide();
        img = ((count / settings.rewardInterval) - 1) % rewards.length;
        card = "<img src='/images/" + rewards[img]  + ".jpg'>";
      }
      else {
        $("#counter").show()
        $("#counter-current").html(active_index + 1);
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