;(function($, window, undefined) {

	"use strict";

	jQuery(document).ready(function ($) {



		$(document).on('scroll', function () {
		    
		    if ($(window).scrollTop() > 40) {
		      
		    	$('.site-header').addClass('scrolled-header');
		    }
		    else {
		    	$('.site-header').removeClass('scrolled-header');
		    }
		});

		// Accordion script
		function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	    }
	 
	    $('.accordion-section-title').click(function(e) {
	        // Grab current anchor value
	        var currentAttrValue = $(this).attr('href');
	 
	        if($(e.target).is('.active')) {
	            close_accordion_section();
	        }else {
	            close_accordion_section();
	 
	            // Add active class to section title
	            $(this).addClass('active');
	            // Open up the hidden content panel
	            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
	        }
	 
	        e.preventDefault();
	    });
	    jQuery('.tabs .tab-links a').on('click', function(e)  {
	        var currentAttrValue = jQuery(this).attr('href');
	 
	        // Show/Hide Tabs
	        jQuery('.tabs ' + currentAttrValue).fadeIn(500).siblings().hide();;
	 
	        // Change/remove current tab to active
	        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
	 
	        e.preventDefault();
	    });


		
		new WOW().init();


		
		var portfolioGrid = $('#portfolio-grid');

		portfolioGrid.imagesLoaded(function(){
		    portfolioGrid.isotope({
			    itemSelector: '.item',
			    layoutMode: 'fitRows',
			    "masonry": { "columnWidth": ".portfolio-grid-sizer" }
			});
		});

      	
		var filterFns = {
		   
		    numberGreaterThan50: function() {
		      var number = $(this).find('.number').text();
		      return parseInt( number, 10 ) > 50;
		    },
		   
		    ium: function() {
		      var name = $(this).find('.name').text();
		      return name.match( /ium$/ );
		    }
		};

      
      	$('#projects-filter').on( 'click', 'a', function() {
		    var filterValue = $( this ).attr('data-filter');
		    
		    filterValue = filterFns[ filterValue ] || filterValue;
		    portfolioGrid.isotope({ filter: filterValue });
		    return false;
		});

      	
		$('#projects-filter').each( function( i, buttonGroup ) {
	    	var $buttonGroup = $( buttonGroup );
	    	$buttonGroup.on( 'click', 'a', function() {
	      		$buttonGroup.find('.active').removeClass('active');
	      		$( this ).addClass('active');
	    	});
	  	});
        
        //main-slider
        
      var slideqty = $('#featured .item').length;
      var wheight = $(window).height(); //get the height of the window
      var randSlide = Math.floor(Math.random()*slideqty);

      $('#featured .item').eq(randSlide).addClass('active');


      $('.fullheight').css('height', wheight); //set to window tallness  


      
      $('#featured .item img').each(function() {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url('+imgSrc+')'});
        $(this).remove();
      });

      //adjust height of .fullheight elements on window resize
      $(window).resize(function() {
        wheight = $(window).height(); //get the height of the window
        $('.fullheight').css('height', wheight); //set to window tallness  
      });


		// Owl Carouse Testimonials

		 var owl = $("#owl-demo");
 
		  owl.owlCarousel({
      		
      		pagination : true,
    		paginationNumbers: false,
      		autoPlay: 5000, //Set AutoPlay to 5 seconds
		    items : 1, //10 items above 1000px browser width
		    itemsDesktop : [1000,1], //5 items between 1000px and 901px
		    itemsDesktopSmall : [900,1], // betweem 900px and 601px
		    itemsTablet: [600,1], //2 items between 600 and 0
		    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		  });

		  var owl = $("#owl-blog");
 
		  owl.owlCarousel({

		  	  pagination: false,
		  	  autoPlay: 3000, //Set AutoPlay to 3 seconds
		      items : 5, //10 items above 1000px browser width
		      itemsDesktop : [1000,4], //5 items between 1000px and 901px
		      itemsDesktopSmall : [900,2], // betweem 900px and 601px
		      itemsTablet: [600,1], //2 items between 600 and 0
		      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		  });

		  var owl = $("#owl-similar");
 
		  owl.owlCarousel({
      		
      		pagination : false,
    		paginationNumbers: false,
      		autoPlay: 5000, 
		    items : 4, 
		    itemsDesktop : [1000,3],
		    itemsDesktopSmall : [900,2],
		    itemsTablet: [600,1], 
		    itemsMobile : false 
		  });

		  var owl = $("#owl-clients");
 
		  owl.owlCarousel({

		  	  pagination: true,
		  	  autoPlay: 3000, 
		      items : 6, 
		      itemsDesktop : [1000,4], 
		      itemsDesktopSmall : [900,3], 
		      itemsTablet: [600,2], 
		      itemsMobile : false 
		  });
		 
		  // Custom Navigation Events
		  $(".next").on('click' ,function(){
		    owl.trigger('owl.next');
		  })
		  $(".prev").on('click' ,function(){
		    owl.trigger('owl.prev');
		  })
		  $(".play").on('click', function(){
		    owl.trigger('owl.play',1000); 
		  })
		  $(".stop").on('click', function(){
		    owl.trigger('owl.stop');
		  })


		// Flex Slider 
		$(window).load(function() {
		  // The slider being synced must be initialized first
		  $('#car-carousel').flexslider({
		    animation: "slides",
		    controlNav: false,
		    directionNav: false,   
		    animationLoop: false,
		    slideshow: false,
		    itemWidth: 115,
		    itemMargin: 4,
		    asNavFor: '#car-flexslider'
		  });
		 
		  $('#car-flexslider').flexslider({
		    animation: "slides",
		    controlNav: false,
		    directionNav: false,
		    animationLoop: false,
		    slideshow: false,
		    sync: "#car-carousel"
		  });
		});

	  	$(window).load(function() {
	 		 $('.futured-post').flexslider({
	    		animation: "slide",
	    		controlNav: true,         
				directionNav: false, 
				slideshow: true,
				slideshowSpeed: 5000,            
	  		});
		});



		// Submenu Show/Hide
        // $('nav.main-navigation ul > li, nav.main-navigation ul > li > ul > li').hover(function () {
        //     $(this).children('ul').stop(true, true).slideDown(200);
        // }, function () {
        //     $(this).children('ul').stop(true, true).slideUp(200);
        // });

		
		$('nav.main-navigation > ul > li').each(function(){
			$(this).find('.has-submenu').append('<i class="fa fa-angle-down"></i>');
		});


        // Blog Masonry
        var blogIsotope=function(){
            var imgLoad = imagesLoaded($('.blog-isotope'));
		   
            imgLoad.on('done',function(){

                $('.blog-isotope').isotope({
                    "itemSelector": ".blog-post",
                });
               
            })
           
           imgLoad.on('fail',function(){

                $('.blog-isotope').isotope({
                    "itemSelector": ".blog-post",
                });

           })  
           
        }
                   
        blogIsotope();



        // Flickr Images
        $('.flickr-images').jflickrfeed({
			limit: 6 ,
			qstrings: {id: '23199621@N02'},
			itemTemplate: '<li class="small-thumb"><a href="{{link}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
		});



		// Off Canvas Navigation
		var offcanvas_open = false;
		var offcanvas_from_left = false;

		function offcanvas_right() {
			
			$(".sidebar-menu-container").addClass("slide-from-left");
			$(".sidebar-menu-container").addClass("sidebar-menu-open");		
			
			offcanvas_open = true;
			offcanvas_from_left = true;
			
			$(".sidebar-menu").addClass("open");
			$("body").addClass("offcanvas_open offcanvas_from_left");

			$(".nano").nanoScroller();
			
		}

		function offcanvas_close() {
			if (offcanvas_open === true) {
					
				$(".sidebar-menu-container").removeClass("slide-from-left");
				$(".sidebar-menu-container").removeClass("sidebar-menu-open");
				
				offcanvas_open = false;
				offcanvas_from_left = false;
				
				//$('#sidebar-menu-container').css('max-height', 'inherit');
				$(".sidebar-menu").removeClass("open");
				$("body").removeClass("offcanvas_open offcanvas_from_left");

			}
		}

		$(".side-menu-button").on('click', function() {
			offcanvas_right();
		});

		$("#sidebar-menu-container").on("click", ".sidebar-menu-overlay", function(e) {
			offcanvas_close();
		});

		$(".sidebar-menu-overlay").swipe({
			swipeLeft:function(event, direction, distance, duration, fingerCount) {
				offcanvas_close();
			},
			swipeRight:function(event, direction, distance, duration, fingerCount) {
				offcanvas_close();
			},
			tap:function(event, direction, distance, duration, fingerCount) {
				offcanvas_close();
			},
			threshold:0
		});
        
        
    

		// Mobile navigation
		$(".responsive-menu .menu-item-has-children").append('<div class="show-submenu"><i class="fa fa-angle-down"></i></div>');

	    $(".responsive-menu").on("click", ".show-submenu", function(e) {
			e.stopPropagation();
			
			$(this).parent().toggleClass("current")
							.children(".sub-menu").toggleClass("open");
							
			$(this).html($(this).html() == '<i class="fa fa-angle-down"></i>' ? '<i class="fa fa-angle-up"></i>' : '<i class="fa fa-angle-down"></i>');
			$(".nano").nanoScroller();
		});

		$(".responsive-menu").on("click", "a", function(e) {
			if( ($(this).attr('href') === "#") || ($(this).attr('href') === "") ) {
				$(this).parent().children(".show-submenu").trigger("click");
				return false;
			} else {
				offcanvas_close();
			}
		});




		//  go to top
      	var offset = 300,
	
		offset_opacity = 1200,
		
		scroll_top_duration = 700,
		
		$back_to_top = $('.go-top');

		
		$(window).on('scroll', function(){
			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('go-top-visible') : $back_to_top.removeClass('go-top-visible go-top-fade-out');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.addClass('go-top-fade-out');
			}
		});

		//smooth scroll to top
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
			 	}, scroll_top_duration
			);
		});

		
		


	});

})(jQuery, window);
