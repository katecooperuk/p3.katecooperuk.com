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
    
    	console.log('tomorrow or later');
        
        return;
      
    }
	
    console.log('today or earlier');
    
});

/*-------------------------------------------------------------------------------------------------
	Reveal Hidden Video to play on December 25
-------------------------------------------------------------------------------------------------*/
if (today.getDate() == 25) {
	
	$('#video').css('visibility', 'visible');

}