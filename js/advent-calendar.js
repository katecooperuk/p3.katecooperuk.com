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
	Door Open - reveal Background image
-------------------------------------------------------------------------------------------------*/

$('.doors').click(function(){

	//console.log('Door was clicked');
	$('#dec1').css('background-image', 'calendarImg');
	
});