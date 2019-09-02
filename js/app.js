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
      maxSubtraction: parseInt($.cookie("maxSubtraction")) || 10,
      maxMultiplication: parseInt($.cookie("maxMultiplication")) || 10
    };

    $(".card").fitText(0.5);

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

    $("#maxMultiplication option[value='" + settings.maxMultiplication + "']").prop("selected", true);
    $("#maxMultiplication").selectmenu('refresh', true);

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
    sets.multiplication = [];
    for (i=1; i<=settings.maxMultiplication; i++) {
      for (j=1; j<=settings.maxMultiplication; j++) {
        sets.multiplication.push(i+"x"+j);
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

    sets.sightwords_fry = "a about all an and are as at be been but by called can come could day did do down each find first for from get go had has have he her him his how I if in into is it like long look made make many may more my no not now number of oil on one or other out part people said see she sit so some than that the their them then there these they this time to two up use was water way we were what when which who will with words would write you your after again air also America animal another answer any around ask away back because before big boy came change different does end even follow form found give good great hand help here home house just kind know land large learn letter line little live man me means men most mother move much must name need new off old only our over page picture place play point put read right same say sentence set should show small sound spell still study such take tell things think three through too try turn us very want well went where why work world years above add almost along always began begin being below between book both car carry children city close country cut don’t earth eat enough every example eyes face family far father feet few food four girl got group grow hard head hear high idea important Indian it’s keep last late leave left let life light list might mile miss mountains near never next night often once open own paper plant real river run saw school sea second seem side something sometimes song soon start state stop story talk those thought together took tree under until walk watch while white without young able ago am among ball base became behind boat box bring brought building built cannot carefully check circle class clear common contain correct course dark decided deep done dry English equation explain fact feel filled finally fine fly force front full game gave government green half heat heavy hot inches include inside island known language less machine material minutes note nothing noun object ocean oh pair person plane power produce quickly ran rest road round rule scientists shape shown six size special stars stay stood street strong surface system ten though thousands understand verb wait warm week wheels yes yet anything arms beautiful believe beside bill blue brother can’t cause cells center clothes dance describe developed difference direction discovered distance divided drive drop edge eggs energy Europe exercise farmers felt finished flowers forest general gone grass happy heart held instruments interest job kept lay legs length love main matter meet members million mind months moon paint paragraph past perhaps picked present probably race rain raised ready reason record region represent return root sat shall sign simple site sky soft square store subject suddenly sum summer syllables teacher test third train wall weather west whether wide wild window winter wish written act Africa age already although amount angle appear baby bear beat bed bottom bright broken build buy care case cat century consonant copy couldn’t count cross dictionary died dress either everyone everything exactly factors fight fingers floor fraction free French gold hair hill hole hope ice instead iron jumped killed lake laughed lead let’s lot melody metal method middle milk moment nation natural outside per phrase poor possible pounds pushed quiet quite remain result ride rolled sail scale section sleep smiled snow soil solve someone son speak speed spring stone surprise tall temperature themselves tiny trip type village within wonder alone art bad bank bit break brown burning business captain catch caught cents child choose clean climbed cloud coast continued control cool cost decimal desert design direct drawing ears east else engine England equal experiment express feeling fell flow foot garden gas glass God grew history human hunting increase information itself joined key lady law least lost maybe mouth party pay period plains please practice president received report ring rise row save seeds sent separate serve shouted single skin statement stick straight strange students suppose symbols team touch trouble uncle valley visit wear whose wire woman wrote yard you’re yourself addition army bell belong block blood blow board bones branches cattle chief compare compound consider cook corner crops crowd current doctor dollars eight electric elements enjoy entered except exciting expect famous fit flat fruit fun guess hat hit indicate industry insects interesting Japanese lie lifted loud major mall meat mine modern movement necessary observe park particular planets poem pole position process property provide rather rhythm rich safe sand science sell send sense seven sharp shoulder sight silent soldiers spot spread stream string suggested supply swim terms thick thin thus tied tone trade tube value wash wasn’t weight wife wings won’t action actually adjective afraid agreed ahead allow apple arrived born bought British capital chance chart church column company conditions corn cotton cows create dead deal death details determine difficult division doesn’t effect entire especially evening experience factories fair fear fig forward France fresh Greek gun hoe huge isn’t led level located march match molecules northern nose office opposite oxygen plural prepared pretty printed radio repeated rope rose score seat settled shoes shop similar sir sister smell solution southern steel stretched substances suffix sugar tools total track triangle truck underline various view Washington we’ll western win women workers wouldn’t wrong yellow".split(' ');

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