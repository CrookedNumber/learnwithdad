$(function(){
  var val = ($.cookie("changeColors") === '1');
  $("#changeColors").prop('checked', val).checkboxradio("refresh");
  $("#changeColors").on("click",
    function() {
      var checked = ($("#changeColors").is(":checked")) ? 1 : 0;
      $.cookie("changeColors", checked, { expires: 28 });
    }
  );
});