/*-------------------------------------------------------------------------------------------------
	JQuery Snow Plugin
-------------------------------------------------------------------------------------------------*/

$(document).ready( function(){
        $.fn.snow({ minSize: 5, maxSize: 30, newOn: 1000, flakeColor: '#FFF' });
});

/*-------------------------------------------------------------------------------------------------
	Play sleigh bells on Door Open
-------------------------------------------------------------------------------------------------*/

$('.doors').click(function(){

	$('#bells').get(0).play();
	
});

/*-------------------------------------------------------------------------------------------------
	Set Up Image Array
-------------------------------------------------------------------------------------------------*/

 var calendarImg = [
 	"url(/images/tree.jpg)", 
 	"url(/images/santa.jpg)", 
 	"url(/images/stockings.jpg)",
 	"url(/images/snoopy.jpg)",
 	"url(/images/stockings2.jpg)",
 	"url(/images/bear.jpg)",
 	"url(/images/penguins.jpg)",
 	"url(/images/baubles.jpg)",
 	"url(/images/polarbear.jpg)",
 	"url(/images/village.jpg)",
 	"url(/images/village2.jpg)",
 	"url(/images/nativity.jpg)",
 	"url(/images/santa2.jpg)",
 	"url(/images/snowman.jpg)",
 	"url(/images/snow.jpg)",
 	]
     
    function imgRandom(imgArr) {
		return imgArr[Math.floor(Math.random() * imgArr.length)];
	}

	//console.log(imgRandom(calendarImg));
 
/*-------------------------------------------------------------------------------------------------
	Door Open - select Random background image from Array
-------------------------------------------------------------------------------------------------*/

$('#dec1').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec1').css('background-image', doorImage);

});

$('#dec2').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec2').css('background-image', doorImage);

});

$('#dec3').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec3').css('background-image', doorImage);

});

$('#dec4').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec4').css('background-image', doorImage);

});

$('#dec5').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec5').css('background-image', doorImage);

});

$('#dec6').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec6').css('background-image', doorImage);

});

$('#dec7').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec7').css('background-image', doorImage);

});

$('#dec8').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec8').css('background-image', doorImage);

});

$('#dec9').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec9').css('background-image', doorImage);

});

$('#dec10').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec10').css('background-image', doorImage);

});

$('#dec11').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec11').css('background-image', doorImage);

});

$('#dec12').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec12').css('background-image', doorImage);

});

$('#dec13').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec13').css('background-image', doorImage);

});

$('#dec14').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec14').css('background-image', doorImage);

});

$('#dec14').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec14').css('background-image', doorImage);

});

$('#dec15').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec15').css('background-image', doorImage);

});

$('#dec16').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec16').css('background-image', doorImage);

});

$('#dec17').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec17').css('background-image', doorImage);

});

$('#dec18').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec18').css('background-image', doorImage);

});

$('#dec19').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec19').css('background-image', doorImage);

});

$('#dec20').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec20').css('background-image', doorImage);

});

$('#dec21').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec21').css('background-image', doorImage);

});

$('#dec22').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec22').css('background-image', doorImage);

});

$('#dec23').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec23').css('background-image', doorImage);

});

$('#dec24').click(function(){
	var doorImage = imgRandom(calendarImg);	
	$('#dec24').css('background-image', doorImage);

});