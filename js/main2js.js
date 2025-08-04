$(function () {
    if (matchMedia("screen and (min-width:600px) and (max-width: 1199px)").matches) {
        $(".nav2").hide();
        $(".menu-trigger").click(function () {
            $(".nav2").animate({width:"toggle"},400);
        });

        $(".nav2text1").hide();
        $(".nav2text2").hide();
        $(".nav2text3").hide();
        $(".nav2text4").hide();

        $(".nav2head1").mouseenter(function(){
            $(".nav2text1").slideDown();
            $(".nav2text2").hide();
            $(".nav2text3").hide();
            $(".nav2text4").hide();
        });

        $(".nav2head1").mouseleave(function(){
            
            $(".nav2text2").hide();
            $(".nav2text3").hide();
            $(".nav2text4").hide();
        });

        $(".nav2head2").mouseenter(function(){
            $(".nav2text2").slideDown();
            $(".nav2text1").hide();
            $(".nav2text3").hide();
            $(".nav2text4").hide();
        });

        $(".nav2head2").mouseleave(function(){
            
            $(".nav2text1").hide();
            $(".nav2text3").hide();
            $(".nav2text4").hide();
        });

        $(".nav2head3").mouseenter(function(){
            $(".nav2text3").slideDown();
            $(".nav2text1").hide();
            $(".nav2text2").hide();
            $(".nav2text4").hide();
        });

        $(".nav2head3").mouseleave(function(){
           
            $(".nav2text1").hide();
            $(".nav2text2").hide();
            $(".nav2text4").hide();
        });

        $(".nav2head4").mouseenter(function(){
            $(".nav2text4").slideDown();
            $(".nav2text1").hide();
            $(".nav2text2").hide();
            $(".nav2text3").hide();
        });

        $(".nav2head4").mouseleave(function(){
            
            $(".nav2text1").hide();
            $(".nav2text2").hide();
            $(".nav2text3").hide();
        });
    }

});