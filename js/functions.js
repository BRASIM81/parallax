$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    $('.logo').css({
        'transform' : 'translate(0px, '+wScroll/2+'%)'
    });
    
    $('.bird-back').css({
        'transform' : 'translate(0px, '+wScroll/4+'%)'
    });
    
    $('.bird-for').css({
        'transform' : 'translate(0px, -'+wScroll/30+'%)'
    });
    
    if(wScroll > $('.clothes-pics').offset().top-($(window).height()/1.2)) {
        
        $('.clothes-pics figure').each(function(i){
            
            setTimeout(function(){
                $('.clothes-pics figure').eq(i).addClass('is-showing');
            },150*(i+1));
            
        });
        
    }
    
      if(wScroll > $('.large-window').offset().top - $(window).height()){
            $('.large-window').css({
                'background-position':'center '+(wScroll - $('.large-window').offset().top)+'px'
            });
          
          var opacity = (wScroll - $('.large-window').offset().top + 400 ) / (wScroll / 5);
          
          $('.window-tint').css({
              'opacity' : opacity
          });
          
    }
    
    if(wScroll > $('.blog-post').offset().top-$(window).height()) {
        
          var opacity2 = (wScroll - $('.blog-post').offset().top + 400 ) / (wScroll / 22);

        
        var offset = Math.min(0, wScroll - $('.blog-post').offset().top + $(window).height() - 400);
        
        $('.post-1').css({
            'transform' : 'translate('+offset+'px, '+Math.abs(offset * 0.2)+'px)'
        });
        
         $('.post-3').css({
            'transform' : 'translate('+Math.abs(offset)+'px, '+Math.abs(offset * 0.2)+'px)'
        });
        
    }
    
    if(wScroll > $('.imgSlide').offset().top - $(window).height()) {
        $('.imgSlide img').css({
            'transform':'translate(0px,0px)'
        });
    }

        
});

$('.content').css({
    'margin-bottom': $('footer').height()+10+'px'
});