var sendObject = {};
sendObject.landing = '3';

$('[name="phone"]').mask('+7 (000) 000-0000');

$('[type="checkbox"]').click(function(){

	if( $('[name="soup"]' ).prop( "checked" ) ){
			sendObject.soup = 'yes';
	}else{
			sendObject.soup = 'no';
	}

	if( $('[name="desert"]').prop( "checked" ) ){
			sendObject.dessert = 'yes';
	}else{
			sendObject.dessert = 'no';
	}
});

$('#sendOrder').click(function(){
	sendObject.name = $('[name="name"]').val();
	sendObject.phone = $('[name="phone"]').val();
	sendObject.email = $('[name="email"]').val();

	validation();

	function validation(){
			var flag;
			if( $('[name="name"]').val().length < 1 ){
				notValidEffect( '[name="name"]' );

			}else if( $('[name="phone"]').val().length < 10 ){
				notValidEffect( '[name="phone"]' );

			}else if( $('[name="email"]').val().length < 1 ){
				notValidEffect( '[name="email"]' );

			}else{

				send();
			}
	}

	function send(){
			DATABASE.sendData( JSON.stringify(sendObject) );
			dataLayer.push({"event": "Promo_smoothies_order"});
			console.log(sendObject);
			sendEffect('.promonabor__form', '.promonabor__sendmessage');

	}

	function notValidEffect(elem){
		    var interval = 70;
		    var distance = 10;
		    var times = 5;
			for(var iter=0;iter<(times+1);iter++){
		        $(elem).animate({
		            right:((iter%2==0 ? distance : distance*-1)),
		            }, interval, function(){
		            	$(elem).css('right','0');
		            });
		    }
	}

	function sendEffect(elem, message){
			$(elem).animate({
				opacity: '0.4'

			}, 300, function(){
						$(elem).hide();
						$(message).show();

			});
	}
});
function mobileMenuOpen(){

	var menuBtn = $('.fix-menu__mobile__nav');
	var menu = $('.fix-menu__mobile_open');
	var menuEl = menu.find('li').not('li:last-child');
	var menuCloseBtn = $('.fix-menu__closeBtn').parent('li');

	menuBtn.click(function(){

		menu.show();

		});

	menuCloseBtn.click(function(){

		menu.hide();

		});

	menuEl.click(function(){

		menu.hide();

		});

	}
mobileMenuOpen();

function smoothScrollTo(){
		$('[data-nav]').click(function(){
			var navAttr = $( this ).attr('data-nav');
				if ( navAttr.length > 1 ) {
					navAttr = '#' + navAttr;

				}else{
					navAttr = $(this).attr("href");

				}

			$("html, body").animate({
				scrollTop: $( navAttr ).offset().top + "px"
			}, {
				duration: 500,
				easing: "swing"
			});

	      return false;

		});
	}
smoothScrollTo();
