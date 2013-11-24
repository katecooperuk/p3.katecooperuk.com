/*-------------------------------------------------------------------------------------------------
	JQuery Snow Plugin
-------------------------------------------------------------------------------------------------*/

$(document).ready( function(){
        $.fn.snow({ minSize: 5, maxSize: 30, newOn: 1000, flakeColor: '#FFF' });
});

/*-------------------------------------------------------------------------------------------------
	Set Up Image Array
-------------------------------------------------------------------------------------------------*/

 var calendarImg = [
 	"images/tree.jpg", 
 	"images/santa.jpg", 
 	"images/stockings.jpg",
 	"images/snoopy.jpg",
 	"images/stockings2.jpg",
 	"images/bear.jpg",
 	"images/penguins.jpg",
 	"images/baubles.jpg",
 	"images/polarbear.jpg",
 	"images/village.jpg",
 	"images/village2.jpg",
 	"images/nativity.jpg",
 	"images/santa2.jpg",
 	"images/snowman.jpg",
 	"images/snow.jpg",
 	]
     
     function imgRandom(imgArr) {
     	return imgArr[Math.floor(Math.random() * imgArr.length)];
	 }
 
	 console.log(imgRandom(calendarImg));
 
 
/*-------------------------------------------------------------------------------------------------
	Door Open - select background image from Array
-------------------------------------------------------------------------------------------------*/

$('#dec1').click(function(){

	console.log('Door was clicked');
	
	$('#dec1').css('background-image', 'calendarImg');
	
});

$('#dec2').click(function(){
	
	$('#dec2').css('background-image', 'url("images/baubles.jpg")');
	
});

$('#dec3').click(function(){
	
	$('#dec3').css('background-image', 'url("images/santa.jpg")');
	
});

$('#dec4').click(function(){
	
	$('#dec4').css('background-image', 'url("images/snowman.jpg")');
	
});

$('#dec5').click(function(){
	
	$('#dec5').css('background-image', 'url("images/bear.jpg")');
	
});

$('#dec6').click(function(){
	
	$('#dec6').css('background-image', 'url("images/snow.jpg")');
	
});

$('#dec7').click(function(){
	
	$('#dec7').css('background-image', 'url("images/santa2.jpg")');
	
});

$('#dec8').click(function(){
	
	$('#dec8').css('background-image', 'url("images/snoopy.jpg")');
	
});
