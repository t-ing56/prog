// jsを記述する際はここに記載していく
$(function(){	      
    $('#btn').click(function () { 
        $('.hidden-news-wrapper').fadeIn();
        $('.hidden-news-wrapper').css('display','flex');
        $('#hidden-btn').fadeIn();        
    });
    $('#hidden-btn').click(function () { 
        $('.hidden-news-wrapper2').fadeIn();
        $('.hidden-news-wrapper2').css('display','flex');
    });

    
    
    $('.change-cheese').click(function () { 
        $('#change1').attr('src','img/change/future-car.jpeg');
        $('#change1').css('width','280px');
    });
    $('.change-cheese').click(function () { 
        $('#change2').attr('src','img/change/future-robo.jpeg');
        $('#change2').css('width','280px');
    });
    $('.change-cheese').click(function () { 
        $('#change3').attr('src','img/change/future-agri.jpeg');
        $('#change3').css('width','280px');
    });
    $('.change-cheese').click(function () { 
        $('#change4').attr('src','img/change/future-city.jpeg');
        $('#change4').css('width','280px');
    });
    $('.change-cheese').click(function () { 
        $('#change5').attr('src','img/change/future-medical.jpeg');
        $('#change5').css('width','280px');
    });
    $('.change-cheese').click(function () { 
        $('#change6').attr('src','img/change/future-living.jpeg');
        $('#change6').css('width','280px');
    });

    $('.change-cheese').click(function () { 
        $('.change-box2').fadeIn();
        $('.change-box2').css('display','flex');
    });

    $('.img-main').hide().fadeIn(2000);
    $('#title3').hide().fadeIn(5000);
    $('#title1').hide().fadeIn(10000);
    $('#title2').hide().fadeIn(10000);
 
});
