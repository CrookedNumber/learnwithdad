$(function(){
  var val = ($.cookie("changeColors") === 'true');
  $("#changeColors").prop('checked', val).checkboxradio("refresh");
  $("#changeColors").on("click",
    function() {
      $.cookie("changeColors", $("#changeColors").is(":checked"), { expires: 28 });
    }
  );
});