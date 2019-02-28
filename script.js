$( document ).ready(function() {
  console.log( "ready!" );
	
  $('#fs-modal').css('height', $(document).outerWidth() + 'px');

  // CLICK HEADLINE TO...
  // SHOW/HIDE TEXT IN P
  // ADD 'skew' CLASS TO mod-img-wrap 
  // ADD 'skew' CLASS TO mod-img
  // ADD 'skew' CLASS TO container

  // $('.headline').on('click', function(){
  //   console.log('clicked, : .headline');
  //   $('body').toggleClass('tint');
  //   $('.text-module.skew').not($(this).parent()).removeClass('skew');
  //   $('.mod-img.skew').not($(this).parent().next('.image-module').children('.mod-img-wrap').children('.mod-img')).removeClass('skew')
  //   $(this).parent().toggleClass('skew');
  //   $(this).parent().next('.image-module').children('.mod-img-wrap').children('.mod-img').toggleClass('skew')
  //   // $(this).siblings('.mod-img-wrap').children('.mod-img').toggleClass('skew');
  // });

  $('.image-module').not('.mod-img').on('click', function(){
    $('body').toggleClass('tint');
    $('.text-module.skew').not($(this).prev('.text-module')).removeClass('skew');
    $('.mod-img.skew').not($(this).children('.mod-img-wrap').children('.mod-img')).removeClass('skew');
    $(this).prev('.text-module').toggleClass('skew');
    $(this).children('.mod-img-wrap').children('.mod-img').toggleClass('skew');

    $(this).prev('.text-module').children('.headline').children('.text').children('.block-image').toggleClass('hide');
    // $(this).siblings('.mod-img-wrap').children('.mod-img').toggleClass('skew');
  });

  // $('.block-image').on('click', function(){
  //   console.log('clicked, : .block-image');
  //   $('body').toggleClass('tint');
  //   $('.text-module.skew').not($(this).parent().parent()).removeClass('skew');
  //   $('.mod-img.skew').not($(this).parent().parent().next('.image-module').children('.mod-img-wrap').children('.mod-img')).removeClass('skew')
  //   $(this).parent().parent().toggleClass('skew');
  //   $(this).parent().parent().next('.image-module').children('.mod-img-wrap').children('.mod-img').toggleClass('skew')
  // })


  
  // $('.headline').on('click', function(){
  // 	console.log('clicked headline');
  // 	$('.module').each( function(){
  // 		console.log('each, this : ', $(this));
	 //  	$(this).find('.text').toggle();
	 //  	$(this).find('.mod-img-wrap').children('.mod-img').toggleClass('skew');
	 //  	$(this).toggleClass('skew');
  // 	});

  // 	$(this).closest('.container').toggleClass('skew');
  // })




  $('.mod-img-wrap').on('click', function(){
  	console.log('clicked, : .mod-img-wrap');
  	// $('.module').toggle();
  	// $('.module').toggleClass('skew2');
  })
  $('.mod-img').on('click', function(event){
    event.stopPropagation();
    console.log('clicked, : .mod-img');
    var source = $(this).attr('src');
    console.log('source::::', source);
    var fullSizeImageSource = source.replace('image_thumbnails','image_fullsize');
    console.log('fullSizeImageSource :::: ',fullSizeImageSource);
    // $('#fs-modal img').attr('src', source);

    // Uncomment the line below to turn on full size image source from image_fullsize folder.
    $('#fs-modal img').attr('src', fullSizeImageSource);

    $('#fs-modal').fadeIn();
  })
  $('#fs-modal').click(function(){
    $(this).fadeOut();
  });

});