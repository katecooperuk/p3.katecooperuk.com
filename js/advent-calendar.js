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