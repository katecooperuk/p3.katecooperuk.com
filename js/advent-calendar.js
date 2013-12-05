/*-------------------------------------------------------------------------------------------------
	JQuery Snow Plugin
-------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
	
	$.fn.snow({ 
	minSize: 5, 
	maxSize: 30, 
	newOn: 1000, 
	flakeColor: '#FFF' 
	});

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
 	"url(/images/image-1.jpg)",  
 	"url(/images/image-2.jpg)",
 	"url(/images/image-3.jpg)",
 	"url(/images/image-4.jpg)",
 	"url(/images/image-5.jpg)",
 	"url(/images/image-6.jpg)",
 	"url(/images/image-7.jpg)",
 	"url(/images/image-8.jpg)",
 	"url(/images/image-9.jpg)",
 	"url(/images/image-10.jpg)",
 	"url(/images/image-11.jpg)",
 	"url(/images/image-12.jpg)",
 	"url(/images/image-13.jpg)",
 	"url(/images/image-14.jpg)",
 	"url(/images/image-15.jpg)",
 	"url(/images/image-16.jpg)",
 	"url(/images/image-17.jpg)",
 	"url(/images/image-18.jpg)",
 	"url(/images/image-19.jpg)",
 	"url(/images/image-20.jpg)",
 	"url(/images/image-21.jpg)",
 	"url(/images/image-22.jpg)",
 	"url(/images/image-23.jpg)",
 	"url(/images/image-24.jpg)",
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
 
/*-------------------------------------------------------------------------------------------------
	Set Up Date Function
-------------------------------------------------------------------------------------------------*/  

var today = new Date(),
 day = today.getDate();

console.log(today);

/*-------------------------------------------------------------------------------------------------
	Door Open - select Random background image from Array
-------------------------------------------------------------------------------------------------*/

$('.doors').click(function () {

    if (today.getMonth() !== 11) {
    
        return;
    }
    
    // Check if the date is tomorrow or later
    if (+($(this).attr('id').split('dec')[1]) > day) {
    
    	// Show image telling user to come back
		$(this).css('background-image', 'url(/images/come_back.png)');
        
        return;
    }
    
    // Otherwise it is today or earlier
    
    // Select Random Image
	var doorImage = getRandomImage(calendarImg);
	
	// Change background image of door that was clicked
	$(this).css('background-image', doorImage);
    
});

/*-------------------------------------------------------------------------------------------------
	Create and Store Cookie
-------------------------------------------------------------------------------------------------*/

//on document ready, checks if the cookie is set, and if so, sets the background with it's value
$(function(){
  if($.cookie('background-image') != null){
     $(this).css('background-image', $.cookie('background-image'));
  }
});

//here you set the cookie, with the value you want
$(function() {
  $(this).css('background-image', doorImage);
  $.cookie('background-image', doorImage);
 });

/*-------------------------------------------------------------------------------------------------
	Reveal Hidden Video to play on December 25
-------------------------------------------------------------------------------------------------*/
if (today.getDate() == 25) {
	
	$('#video').css('visibility', 'visible');

}
