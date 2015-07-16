$(document).ready(function(){
	$("body").append("<div id ='container'>");
for(var i = 0; i < (16*16); i++){
$("#container").append("<div class='square'>"); 
}
$(".square").css({
	"width" : "100px", 
	"height" : "100px", 
	"display":"inline-block",
	"margin":"0",
	"border":"1px solid"});
   
  
	  
	  $('.square').hover(function(){
		  $(this).addClass('hover');
	  });
  });
	  function newGrid(){
		  $(".square").css('background-color', 'white');
		  for(var i = 0; i < (16*16); i++){
		  $('#container').remove()
	  }
		  $('body').prepend('<div id="container"></div>')
		  
		  var width = prompt("Enter a grid width")
		  var height = width;
		  if (width > 90){
			  var width = prompt("Width must be 90 or less")
		  }
		  
	
		  for (var i=0; i<= width;i++){
    $('#container').append("<div class='square'>");
  }
		for (var i=0; i<= height;i++){
    $('#container').append("<div class='square'>");
  } 
		  
		$(".square").css({"outline" : "1px solid", 
	"width" : "100px", "height" : "100px", 
	"float":"left"});
   
   $(".square").wrap("<div id ='container'>");
	  
	  $('.square').hover(function(){
		  $(this).addClass('hover');
	  });
};
