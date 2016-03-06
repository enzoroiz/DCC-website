var normalSpeed = 400;
var fastSpeed = normalSpeed/2;

$(document).ready(function(){
	var $aboutTitle = $('.about-title');
	var $aboutWrapper = $('.about-wrapper');
	var $contactTitle = $('.contact-title');
	var $contactWrapper = $('.contact-wrapper');
	var $leftPanel = $('#left-panel');
	var $submitMail = $('.submit')
	var $photo = $('.photo');
	var $contactForm = $('#contact-form');

	$('#menu-contact').click(function(){
		$leftPanel.animate({
			'background-color': '#F44336'
		});

		$photo.animate({
			'border-color':'#F44336'
		});

		$aboutTitle.animate({
			'opacity': 0,
			'top': '20%'
		});

		$contactTitle.animate({
			'opacity': 1,
			'top': '50%'
		});

		$aboutWrapper.animate({
			'opacity': 0
		},
		fastSpeed,
		function(){
			$aboutWrapper.css('display', 'none');
			$contactWrapper.css('display', 'block');
			$contactWrapper.animate({
				'opacity': 1,
			});
		});
	});

	$('#menu-about').click(function(){
		$leftPanel.animate({
			'background-color': '#00897B'
		});

		$photo.animate({
			'border-color':'#00897B'
		});

		$aboutTitle.animate({
			'opacity': 1,
			'top': '50%'
		});

		$contactTitle.animate({
			'opacity': 0,
			'top': '80%'
		});

		$contactWrapper.animate({
			'opacity': 0
		},
		fastSpeed,
		function(){
			$contactWrapper.css('display', 'none');
			$aboutWrapper.css('display', 'block');
			$aboutWrapper.animate({
				'opacity': 1
			});
		});
	});

	$contactForm.validate({
		rules:{
			name: 'required',
			email: {
				required: true,
				email: true
		    },
			subject: 'required',
			message: 'required',
		},

		messages: {
			name: "Por favor, preencha este campo.",
			email: {
				required: 'Por favor, preencha este campo.',
				email: 'Seu email deve estar no formato "nome@dominio.com"'
			},
			subject: 'Por favor, preencha este campo.',
			message: 'Por favor, preencha este campo.'
		},

		submitHandler: function(form){
			$.ajax({
				type: 'POST',
				url: 'mail.php',
				data: $contactForm.serialize(),
				success: function(response){
					if (response['sent'] == 'true'){
						swal({
							title: "Email enviado! ;)",
							text: response['message'],
							type: 'success',
							'allowEscapeKey': 'true',
							'allowOutsideClick': 'true',
						});	
					} else {
						swal({
							title: "Email não enviado! :(",
							text: response['message'],
							type: 'error',
							'allowEscapeKey': 'true',
							'allowOutsideClick': 'true',
						});
					}
					
				},
				fail: function(response){
					console.log(response);
				}
			});
		}
	});

	$('.social-media .fa-facebook').hover(function(){
	    shake($(this));
	}, function(){
	    stopShake($(this));
	});

	$('.social-media .fa-twitter').hover(function(){
	    shake($(this));
	}, function(){
	    stopShake($(this));
	});

	$('.social-media .fa-linkedin').hover(function(){
	    shake($(this));
	}, function(){
	    stopShake($(this));
	});
});

function shake(selector){
	if(!$(selector).hasClass('animated')){
	    $(selector).addClass('animated');
	    $(selector).stop().effect('shake', { distance:3 }, fastSpeed);
	}
}

function stopShake(selector){
	$(selector).removeClass('animated');
}