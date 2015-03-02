$(function(){
  $("#changeColors").on("click",
    function() {
      var checked = ($("#changeColors").is(":checked")) ? 1 : 0;
      $.cookie("changeColors", checked, { expires: 28 });
    }
  );
  $("#rewardInterval").on("change",
    function() {
      var val = $(this).val();
      $.cookie("rewardInterval", val, { expires: 28 });
    }
  );
  $("[name=set]").on("change",
    function() {
      var val = $(this).val();
      $.cookie("set", val, { expires: 28 });
    }
  );
  $("#maxNumber").on("change",
    function() {
      var val = $(this).val();
      $.cookie("maxNumber", val, { expires: 28 });
    }
  );
  $("#maxAddition").on("change",
    function() {
      var val = $(this).val();
      $.cookie("maxAddition", val, { expires: 28 });
    }
  );
  $("#maxSubtraction").on("change",
    function() {
      var val = $(this).val();
      $.cookie("maxSubtraction", val, { expires: 28 });
    }
  );
});