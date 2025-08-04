$(function(){
    if (matchMedia("screen and (min-width:600px) and (max-width: 1199px)").matches){
        $(".none").hide();
        $(".sec2box2img1 li").removeClass("none2");
        $(".sec2box2img2 li").removeClass("none2");      
        $(".sec2box2img3 li").removeClass("none2");      
        $(".sec2box2img4 li").removeClass("none2");

        $(".sec1box").css("z-index","1").removeClass("pageup");
        $(".sec2box").css("z-index","2").removeClass("pageup");
        $(".sec3box").css("z-index","3").removeClass("pageup");

        $(".sec1box").click(function(){
            $(this).css("z-index","3").addClass("pageon");
            $(".sec2box").css("z-index","2").removeClass("pageon");
            $(".sec3box").css("z-index","1").removeClass("pageon");
            
            
            
        });
        $(".sec2box").click(function(){
            $(this).css("z-index","3").addClass("pageon");
            $(".sec1box").css("z-index","2").removeClass("pageon");
            $(".sec3box").css("z-index","1").removeClass("pageon");
            
        });
    
        $(".sec3box").click(function(){
            $(this).css("z-index","3").addClass("pageon");
            $(".sec2box").css("z-index","2").removeClass("pageon");
            $(".sec1box").css("z-index","1").removeClass("pageon");
           
        });
    }
  
});