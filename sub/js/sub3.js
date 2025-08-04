
$(function(){
    if (matchMedia("screen and (max-width:599px)").matches){
        $(".none").hide();
        $(".none2").hide();
        $(".sec1box").css("z-index","1").removeClass("pageon");
        $(".sec2box").css("z-index","2").removeClass("pageon");
        $(".sec3box").css("z-index","3").removeClass("pageon");
        
        $(".sec1box11").click(function(){
            $(".sec1box").css("z-index","1").addClass("pageup");
            $(".sec2box").css("z-index","2").removeClass("pageup");
            $(".sec3box").css("z-index","3").removeClass("pageup");

            
        });
        $(".sec2box11").click(function(){
            $(".sec2box").css("z-index","1").addClass("pageup");
            $(".sec1box").css("z-index","3").removeClass("pageup");
            $(".sec3box").css("z-index","2").removeClass("pageup");
            
        });
    
        $(".sec3box11").click(function(){
            $(".sec3box").css("z-index","1").addClass("pageup");
            $(".sec2box").css("z-index","3").removeClass("pageup");
            $(".sec1box").css("z-index","2").removeClass("pageup");
           
        });

      
    }
});