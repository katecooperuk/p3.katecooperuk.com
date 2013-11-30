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

var today = new Date()
var day = today.getDate()

console.log(today);


/*-------------------------------------------------------------------------------------------------
	Door Open - select Random background image from Array
-------------------------------------------------------------------------------------------------*/

$('.doors').click(function () {
    
    /* Commented out for testing
    if (today.getMonth() !== 11) {
        return;
    }
    */
    
    console.log($(this).attr('id'));
    
    if ($(this).attr('id') <= 'dec' + (day - 20)) { // make it 20th Dec for testing
        
        // Select Random Image
		var doorImage = getRandomImage(calendarImg); 
	
		// Change background image of door that was clicked
		$(this).css('background-image', doorImage);
        
        console.log('Today or less');
        
        return;  
    }
    
    // Show image telling user to come back
    $(this).css('background-image', 'url(/images/come_back.png)');
    console.log('greater than today');
});