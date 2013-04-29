// JavaScript Document
$(document).ready( function() {
	$('#tab-container').easytabs({
	panelContext: $('#panel-container'),
	transitionIn: 'slideDown',
	transitionOut: 'slideUp'
});

$('#hire_plus').click( function() {
	$('#tab-container').easytabs('select', '#hire_me');
});


  
  	$('#slider').nivoSlider(
			{
				effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
				slices: 15, // For slice animations
				boxCols: 8, // For box animations
				boxRows: 4, // For box animations
				animSpeed: 500, // Slide transition speed
				pauseTime: 3000, // How long each slide will show
				startSlide: 0, // Set starting Slide (0 index)
				pauseOnHover: false, // Do'nt stop animation while hovering
				randomStart: false, // Start on a random slide
				directionNav:false,// Hide Next & Prev navigation
				directionNavHide:false, //Only show on hover
				controlNav:false,	//Hide 1,2,3... navigation
				controlNavThumbs:false,//Hide thumbnails for Control Nav
				controlNavThumbsFromRel:false,//Don't Use image rel for thumbs
				keyboardNav:false,//Don't Use left & right arrows
				manualAdvance:false//Force manual transitions
			});
		
				 
		$(".scrollContent").mCustomScrollbar({
			set_width:false,
			set_height:false,
			autoDraggerLength: false,
			scrollEasing:"easeOutCirc", 
			mouseWheel:"auto", 
			advanced:{
				updateOnBrowserResize:true, 
				updateOnContentResize:true, 
				autoExpandHorizontalScroll:false 
			}
 	  	});
		
	carouselFilter({
		filterLinks : '#filters', /*id filter links container*/
		carouselUl : '#carousel_ul', /*id carousel ul*/
		righMoveSlide : '#right_scroll',
		leftMoveSlide : '#left_scroll'
		});	
		
	carouselFilter({
		carouselUl : '#skill_carousel', /*id carousel ul*/
		righMoveSlide : '#rightmove',
		leftMoveSlide : '#leftmove'
		});	
		
	/* Initialization of google map */
	initMap.count=0;
	initMap();
	$('#tab-container').bind('easytabs:after', function(evt,tab,panel) {
		if ( tab.hasClass('contact') ) {
			initMap();
			initMap.count++;
		}
	});
	
	function initMap()
	{
		if(initMap.count!=0)return;
		var mapOptions = {
			scaleControl: true,
			center: new google.maps.LatLng(32.153216,-94.79938),
			//<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=henderson+texas&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=37.956457,79.013672&amp;ie=UTF8&amp;hq=&amp;hnear=Henderson,+Rusk,+Texas&amp;t=m&amp;z=12&amp;ll=32.153216,-94.79938&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=henderson+texas&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=37.956457,79.013672&amp;ie=UTF8&amp;hq=&amp;hnear=Henderson,+Rusk,+Texas&amp;t=m&amp;z=12&amp;ll=32.153216,-94.79938" style="color:#0000FF;text-align:left">View Larger Map</a></small>
			//https://maps.google.com/maps?q=henderson+texas&hl=en&sll=37.0625,-95.677068&sspn=37.956457,79.013672&hnear=Henderson,+Rusk,+Texas&t=m&z=12
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
		var marker = new google.maps.Marker({
			map: map,
			position: map.getCenter()
		});
		var infowindow = new google.maps.InfoWindow();
		infowindow.setContent('<b>My Adress:</b><br> 1 Central Park<br> New York 10019');
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}
	
	$("a[rel^='prettyPhoto']").prettyPhoto({
		allow_resize: true,
		social_tools: false,
		horizontal_padding: 5
		});
 
 	$('.default').dropkick();
 
 	$('#tab-container').prepend('<div id="menu_min">Menu</div>');
	
	/* toggle nav */
	$("#menu_min").on("click", function(){
		$("#main_menu").toggleClass("open");
	});
	
	if(!Modernizr.input.placeholder){
 
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		
	}			 		

});