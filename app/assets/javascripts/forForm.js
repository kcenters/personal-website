$(function() {
    // These first three lines of code compensate for Javascript being turned on and off. 
    // It simply changes the submit input field from a type of "submit" to a type of "button".
    $('#contact_form input#submit').click(function(e) {
      /*  $('#contact-form').append('<img src="../JavaScript/images/ajax-loader.gif" class="loaderIcon" alt="Loading..." />');*/
		e.preventDefault();	
						
		
		var error = 0;
		var self = $(this);
        var name = $('input#name');
	    var email = $('input#email');
		var comments = $('textarea#comments');
		
        if( name.val().length>2 &&  name.val()!= name.attr('placeholder')) {
			name.removeClass('invalid_field');		
		} 
		else {
				name.addClass('invalid_field');
				error++;
		}
				
		var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		
  		if(emailRegex.test(email.val())) {
			email.removeClass('invalid_field');
		}
		else {
			email.addClass('invalid_field');
			error++;
		} 
		
		if(comments.val().length>3 &&  comments.val()!= comments.attr('placeholder') ) {
			comments.removeClass('invalid_field');
		} 
		else {
			comments.addClass('invalid_field');
			error++;
		}
			
		if (error!=0)return;
				
        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name.val() + '&email=' + email.val() + '&comments=' + comments.val(),

            success: function(results) {
				self.parent('div').html(results);
               
            }
        }); // end ajax
    });

	$('#hire_me_form input#submith').click(function(e) {
      
		e.preventDefault();	
		var error = 0;
		var self = $(this);
		
        var name = $('#hire_me_form input#nameh');
	    var email = $('#hire_me_form input#emailh');
		var company = $('#hire_me_form input#companyh');
		var phone = $('#hire_me_form input#phoneh');
		var role = $('#hire_me_form #roleh');
		var comments = $('#hire_me_form textarea#commentsh');
		
		
        if( name.val().length>2 &&  name.val()!= name.attr('placeholder')  ) {
			name.removeClass('invalid_field');			
		} 
		else {
				name.addClass('invalid_field');
				error++;
		}
		
		if( company.val().length>2 &&  company.val()!= company.attr('placeholder')  ) {
			company.removeClass('invalid_field');			
		} 
		else {
				company.addClass('invalid_field');
				error++;
		}
		
		var telRegex =/[0-9]{7,15}$/;
		
		if(  telRegex.test(phone.val()) ) {
			phone.removeClass('invalid_field');			
		} 
		else {
				phone.addClass('invalid_field');
				error++;
		}
				
		var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		
  		if(emailRegex.test(email.val())) {
			email.removeClass('invalid_field');
		}
		else {
			email.addClass('invalid_field');
			error++;
		} 
		
		if(comments.val().length>3 && comments.val()!= comments.attr('placeholder')) {
			comments.removeClass('invalid_field');
		} 
		else {
			comments.addClass('invalid_field');
			error++;
		}
			
		if (error!=0)return;
				
        $.ajax({
            type: 'post',
            url: 'sendHireForm.php',
			data: 'name=' + name.val() + '&email=' + email.val() + '&company=' + company.val() + '&phone=' + phone.val() + '&role=' + role.val() + '&comments=' + comments.val(),
            success: function(results) {
				self.parent('div').html(results);
            }
        }); // end ajax
    });


});
		