// JavaScript Document
function carouselFilter(obj) {
	  
	  /*
	 	obj.filterLinks : '#filters a',
		obj.carouselUl : '#carousel_ul'
		obj.righMoveSlide : '#right_scroll',
		obj.leftMoveSlide : '#left_scroll'*/
	  
	    var filtLinks = $(obj.filterLinks + ' a');
		var carouselList = $(obj.carouselUl);
		var carouselListElements = carouselList.children('li');/*$('#carousel_ul li')*/
		
		carouselList.css({
			'position':'relative',
    		'left':'0px', 
   	    	'width':'9999px'
			}).parent().css({
			'float':'left', 
			'overflow': 'hidden'	
			});
			
		carouselListElements.css({
			'float': 'left'	
		});
		
		filtLinks.click(function(e){
		//prevent the default behaviour of the link
		e.preventDefault();	
			
		filtLinks.removeClass('activef');
		$(this).addClass('activef');
		//get the id of the clicked link(which is equal to classes of our content
		
		var filter = $(this).attr('id');
		
		//show all the list items(this is needed to get the hidden ones shown)
		carouselListElements.show();
		
		/*using the :not attribute and the filter class in it we are selecting
		only the list items that don't have that class and hide them '*/
		if ( filter.toLowerCase()!=='all')
		$(obj.carouselUl+' li:not(.' + filter + ')').hide();
		});
	
        //when user clicks the image for sliding right        
        $(obj.righMoveSlide).click(function(e){
			
			//prevent the default behaviour of the link
			
			e.preventDefault();
			
			var sum = 0;
			
        	carouselListElements.each(function(index, element) {
				if ($(this).css('display')!='none')
                sum +=parseInt($(this).outerWidth(true)); 
            });
			
			var widthOfparent = parseInt(carouselList.parent().css('width'));
			
			if (widthOfparent>sum) return;
			
            //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
            var item_width = carouselListElements.outerWidth(true);
            
            //calculae the new left indent of the unordered list
            var left_indent = parseInt(carouselList.css('left')) - item_width;
            
            //make the sliding effect using jquery's anumate function 
			while($(obj.carouselUl+' li:first').css('display')=='none')
			{
				$(obj.carouselUl+' li:last').after($(obj.carouselUl+' li:first'));	
			}
			
            $(obj.carouselUl+':not(:animated)').animate({'left' : left_indent},400,function(){    
                
                //get the first list item and put it after the last list item (that's how the infinite effects is made) '
                $(obj.carouselUl+' li:last').after($(obj.carouselUl+' li:first')); 
                
                //and get the left indent to the default -210px
                carouselList.css({'left' : '0px'});
            }) 
        });
        
        //when user clicks the image for sliding left
        $(obj.leftMoveSlide).click(function(e){
			//prevent the default behaviour of the link
			e.preventDefault();
			
		
			var sum = 0;
			
        	carouselListElements.each(function(index, element) {
				if ($(this).css('display')!='none')
                sum +=parseInt($(this).outerWidth(true)); 
            });
			
			var widthOfparent = parseInt(carouselList.parent().css('width'));
			if (widthOfparent>sum) return;
			
			while($(obj.carouselUl+' li:last').css('display')=='none')
			{
				$(obj.carouselUl+' li:first').before($(obj.carouselUl+' li:last')); 	
			}
			
            var item_width = carouselListElements.outerWidth(true);
			
            /* same as for sliding right except that it's current left indent + the item width (for the sliding right it's - item_width) */
            var left_indent = parseInt(carouselList.css('left')) + item_width;
			
			
			carouselList.css('left', (-left_indent));
						
            $(obj.carouselUl+' li:first').before($(obj.carouselUl+' li:last')); 
			
            $(obj.carouselUl+':not(:animated)').animate({'left' : 0},400,function(){});
            
            
        });
  }