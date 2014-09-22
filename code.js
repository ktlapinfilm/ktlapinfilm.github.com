$(function(){
	$('a img').hover(function(){
		$(this).fadeTo(0,0.5);
	},function () {
    $(this).fadeTo(0,1);
  });
})