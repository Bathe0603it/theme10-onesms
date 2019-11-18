$(document).ready(function(){
    $(window).scroll(function(){

    });

    // Button scroll to top
    $(".scrollToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false
    });

    // Button scroll to bottom
    $(".scrollTobottom").click(function() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 800);
        return false
    });  

    // Scroll mouse
    $(window).scroll(function(){
        /*if($(this).scrollTop()>80){
            $('.main-header').addClass('fixed-head');
        } 
        else{
            $('.main-header').removeClass('fixed-head');
        }*/
    });

    // Click to close
    $(".close-here").click(function(){
        var dataHere = $(this).attr("data-here");
        var dataSwing = $(this).attr("data-swing");
        $objectHere = $(this).parent().find("#"+dataHere);
        $objectIcon = $(this).parent().find("#icon-here");

        if (dataSwing == "yes") {
            $objectIcon.addClass("icon-here-swing");
            $objectHere.slideUp("slow");
            $(this).attr("data-swing", "no");
            $(this).removeClass("active");
        }
        else if(dataSwing == "no"){
            $objectIcon.removeClass("icon-here-swing");
            $objectHere.slideDown("slow");
            $(this).attr("data-swing", "yes");
            $(this).addClass("active");
        }
        else{
            $objectIcon.addClass("icon-here-swing");
            $objectHere.slideUp("slow");
            $(this).attr("data-swing", "no");
            $(this).removeClass("active");
        }

    });

    var menu_show = true;
    $('.btnclick').click(function(){
        if (menu_show) {
            $('.menuMobile').animate({left: '0px',opacity: '1'},'slow');
            $('.bgMenuShow').addClass('open');
            $('#wrap').addClass('open');
            menu_show = false;
        }
        else{
            $('.menuMobile').animate({left: '-100%',opacity: '0'},'slow');
            $('.bgMenuShow').removeClass('open');
            $('#wrap').removeClass('open');
            menu_show = true;
        }
    });
    $('.bgMenuShow').click(function(){
        $('.menuMobile').animate({left: '-100%',opacity: '0'},'slow');
        $('.bgMenuShow').removeClass('open');
        $('#wrap').removeClass('open');
        menu_show = true;
    });
});