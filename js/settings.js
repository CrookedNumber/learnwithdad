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
});