$(function(){
    if (matchMedia("screen and (min-width: 1200px)").matches) {
        $(".nav2").hide();
        $(".navigation li").mouseenter(function(){
            $(".nav1").hide();
            $(".nav2").slideDown("fast");
            
        });
        $(".nav2inbox").mouseleave(function(){
            $(".nav2").slideUp("fast");
            $(".nav1").show();
        });

        $(".langinbox1").hover(function () {
            $(".langinbox11").stop().slideDown("fast");
        }, function () {
            $(".langinbox11").stop().slideUp("fast");
        });
    }
    
    });