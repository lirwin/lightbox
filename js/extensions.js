
$(function() {
	
	var imageData = {
		"imgs/img-1-thumb.jpg": "imgs/img-1.jpg",
		"imgs/img-2-thumb.jpg": "imgs/img-2.jpg",
		"imgs/img-3-thumb.jpg": "imgs/img-3.jpg",
		"imgs/img-4-thumb.jpg": "imgs/img-4.jpg",
		"imgs/img-5-thumb.jpg": "imgs/img-5.jpg",
	}
	//add the lightbox to the DOM if it hasn't already been added
	if($('#lightbox').length == 0){
		$("body").append("<div id='lightboxShadow'>").append("<div id='lightbox'>");
		$("#lightbox").wrap("<div id='lightboxWrapper'>");
	}	

	//img click event handler opens larger image in lightbox
	$("#content").on("click", "img", function(e) {
		var smImage = $(this).attr("src");
		var lgImage = imageData[smImage];
		var lightboxWidth;
		var image = new Image();
		
		image.src = lgImage;

        //prepare lightbox margin-top,height and <body> to no scroll before displaying
        function displayLightbox() {
            $("#lightbox").css("margin-top", $(window).scrollTop() + 50 + "px");
                            
            $("#lightboxShadow").css("height", $("body").height() + $(window).scrollTop() + "px");
            $("body").css("overflow","hidden");
            $("#lightboxWrapper").css("width", lightboxWidth);
            $(image).appendTo("#lightbox");
            $("#lightbox").append("<div class='ctrlBar'><button>Close</button></div>");
            $("#lightbox, #lightboxShadow").fadeIn(400);
        }
        		
        image.onload = function() {
          lightboxWidth = image.width;
          
          //if there is a large image show it in the lightbox otherwise return false
          if (lgImage){   
                displayLightbox();
          }else {
                alert("Large image does not exist");
                return false;
          }   
        };
		e.preventDefault();
	});	
	
	//.ctrlBar button event handler closes lightbox
	$("body").on("click", ".ctrlBar button, #lightboxShadow", function(e) {
		$("#lightbox").hide();
		$("#lightboxShadow").hide();
		$("body").css("overflow","visible");	
		$("#lightbox").empty();
	});
	

});







