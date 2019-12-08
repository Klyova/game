
"use strict";
let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
		let config = {
			responsive:true,
    		maintainAspectRatio: false,
			type: 'line',
			data: {
				labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
				datasets: [{
					label: 'Текущий период',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,

					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
					fill: false,
					
				}, {
					label: 'Предыдущий период',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				}]
			},
			options: {
				 legend: {
		            display: true,
		            position: 'bottom',
		   
		            
		            labels: {
		            	boxWidth: 34,
		            	boxHeight: 2,
		                fontColor: 'rgb(255, 99, 132)',

		            }
		        },
				responsive: true,
			
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
					}],
					yAxes: [{
						display: true,
					}]
				}
			}
		};

			window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};

$(window).resize(function() {
if($( document ).width()>1023){
	$(".testselect2").parent().css('display','none ');
	$(".testselect1").parent().css('width','149px ');
};

if($( document ).width()<1023){
	$(".testselect2").parent().show();
	$(".testselect1").parent().css('width','109px ');
	$(".testselect2").parent().css({'width':'69px '});
}
});


$(document).ready(function() {
	
$(function() {
	let Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		
		let links = this.el.find('.link');
		
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		let $el = e.data.el;
		let	$this = $(this);
		let	$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	let accordion = new Accordion($('#accordion'), false);
	let accordion1 = new Accordion($('#accordion1'), false);
});

$(".owl-carousel").owlCarousel({
   items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
	});


$('.testselect1, .testselect2').SumoSelect();

$(".testselect1").click(function() {
  $(".testselect1").parent().find('i').toggleClass("rot")
});

$(".testselect2").click(function() {
  $(".testselect2").parent().find('i').toggleClass("rot")
});

$(".btn_open").click(function() {
  $('.left_menu').toggleClass("active");
  $(".btn_open").toggleClass("btn_close");
  $(".header .header_bottom").toggleClass("hide");
});


$(".arrow_down").click(function() {
	$(".down_box_text").slideToggle(500)
	$(".arrow_down img").toggleClass("rot")
});

$(".btn_user").click(function() {
  $('.user_card').toggleClass("active-card");
  $(".btn_user").toggleClass("btn_close");
  $(".header .header_bottom").toggleClass("hide");
});

$(window).resize();

});


  (function($){
        $(window).on("load",function(){
            if($('.navigation').height() > 384){
	$(".navigation").mCustomScrollbar({
		axis:"x",
    theme:"dark"
});
}
        });
    })(jQuery);
