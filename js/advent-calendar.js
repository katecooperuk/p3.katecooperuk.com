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
     
/*-------------------------------------------------------------------------------------------------
	Set Up Splice to select random image and ensure it's only used once
-------------------------------------------------------------------------------------------------*/    
     
    function getRandomImage(arr) {
    
    	if (arr.length > 0) { 
        random = Math.floor(Math.random()*arr.length)
        return arr.splice(random, 1)[0];
    } 
}

	//console.log(imgRandom(calendarImg));
 
/*-------------------------------------------------------------------------------------------------
	Door Open - select Random background image from Array
-------------------------------------------------------------------------------------------------*/

$('.doors').click(function(){ 

	// Select Random Image
	var doorImage = getRandomImage(calendarImg); 
	
	// Change background image of door that was clicked
	$(this).css('background-image', doorImage); 
	
});