/*-------------------------------------------------------------------------------------------------
	Set Up Image Array
-------------------------------------------------------------------------------------------------*/

 var calendarImg = ["/images/tree.jpg", "/images/santa.jpg", "/images/stockings.jpg"]
     
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