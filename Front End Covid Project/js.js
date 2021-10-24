$(document).ready(function(){    
    
    
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0) {
            // $("icon-scroll").fadeIn();
            $("nav").removeClass("bg-transparent");
            $("nav").addClass("shadow");            
            $("nav").addClass("bg-white",500);
            $("#icon-scroll").removeClass("div-hide",1500);
        }
        if(scroll_pos == 0){
            // $("icon-scroll").fadeOut();
            $("nav").addClass("bg-transparent",500);
            $("nav").removeClass("shadow");
            $("nav").removeClass("bg-white");
            $("#icon-scroll").addClass("div-hide",1500);

        }
    });

    $("#button1").click(function (e) { 
        e.preventDefault();
        $("#div-2").hide();
        $("#div-3").hide();
        $("#div-4").hide();
        $("#div-5").hide();
        $("#div-6").hide();
        $("#button2 , #button3 , #button4 , #button5 , #button6").css("color", "#465675");
        $("#button2 , #button3 , #button4 , #button5 , #button6").css("border-color", "#e7e8ff");
        $("#div-1").show();
        $(this).css("color","#2a81ea");
        $(this).css("border-color","#2a81ea");
    });

    $("#button2").click(function (e) { 
        e.preventDefault();
        $("#div-1").hide();
        $("#div-3").hide();
        $("#div-4").hide();
        $("#div-5").hide();
        $("#div-6").hide();
        $("#button1 , #button3 , #button4 , #button5 , #button6").css("color", "#465675");
        $("#button1 , #button3 , #button4 , #button5 , #button6").css("border-color", "#e7e8ff");
        $("#div-2").show();
        $(this).css("color","#2a81ea");
        $(this).css("border-color","#2a81ea");
    });

    $("#button3").click(function (e) { 
        e.preventDefault();
        $("#div-1").hide();
        $("#div-2").hide();
        $("#div-4").hide();
        $("#div-5").hide();
        $("#div-6").hide();
        $("#button2 , #button1 , #button4 , #button5 , #button6").css("color", "#465675");
        $("#button2 , #button1 , #button4 , #button5 , #button6").css("border-color", "#e7e8ff");
        $("#div-3").show();
        $(this).css("color","#2a81ea");
        $(this).css("border-color","#2a81ea");
    });

    $("#button4").click(function (e) { 
        e.preventDefault();
        $("#div-1").hide();
        $("#div-2").hide();
        $("#div-3").hide();
        $("#div-5").hide();
        $("#div-6").hide();
        $("#button2 , #button3 , #button1 , #button5 , #button6").css("color", "#465675");
        $("#button2 , #button3 , #button1 , #button5 , #button6").css("border-color", "#e7e8ff");
        $("#div-4").show();
        $(this).css("color","#2a81ea");
        $(this).css("border-color","#2a81ea");
    });

    $("#button5").click(function (e) { 
        e.preventDefault();
        $("#div-1").hide();
        $("#div-2").hide();
        $("#div-3").hide();
        $("#div-4").hide();
        $("#div-6").hide();
        $("#button2 , #button3 , #button4 , #button1 , #button6").css("color", "#465675");
        $("#button2 , #button3 , #button4 , #button1 , #button6").css("border-color", "#e7e8ff");
        $("#div-5").show();
        $(this).css("color","#2a81ea");
        $(this).css("border-color","#2a81ea");
    });

    $("#button6").click(function (e) { 
        e.preventDefault();
        $("#div-1").hide();
        $("#div-2").hide();
        $("#div-3").hide();
        $("#div-4").hide();
        $("#div-5").hide();
        $("#button2 , #button3 , #button4 , #button5 , #button1").css("color", "#465675");
        $("#button2 , #button3 , #button4 , #button5 , #button1").css("border-color", "#e7e8ff");
        $("#div-6").show();
        $(this).css("color","#2a81ea");
        $(this).css("border-color","#2a81ea");
    });

    $("a.font-button").click(function (e) { 
        e.preventDefault();
        $(this).find("i.icon-plus").toggleClass("fa-minus fa-plus");
    
        
    });
    // 2nd div position
    var position = $("#AboutCorona").position();
    var top = position.top;
    // 3rd div poisition
    var position3 = $("#spread").position();
    var top3 = position3.top;
   // 4th div poistion
   var position4 = $("#Symptoms").position();
    var top4 = position4.top;
    // 5th div poistion
    var position5 = $("#Preventation").position();
    var top5 = position5.top;
    // 6th div poistion
    var position6 = $("#Treatment").position();
    var top6 = position6.top;
    // 7th div position
    var position7 = $("#DO").position();
    var top7 = position7.top;
    // 8th div position
    var position8 = $("#FAQ").position();
    var top8 = position8.top;
    // 9th div position
    var position9 = $("#News").position();
    var top9 = position9.top;
    // 10th div position
    var position10 = $("#Footer").position();
    var top10 = position10.top;
  
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos < top) {
            $("#item1").css("color","#2a81ea");
        }
        else{
            $("#item1").css("color","#50658e");
        }

        if(scroll_pos >= top && scroll_pos < top3) {
            $("#item2").css("color","#2a81ea");
        }
        else{
            $("#item2").css("color","#50658e");
        }

        if(scroll_pos >= top4 && scroll_pos < top5) {
            $("#item3").css("color","#2a81ea");
        }
        else{
            $("#item3").css("color","#50658e");
        }

        if(scroll_pos >= top5 && scroll_pos < top6) {
            $("#item4").css("color","#2a81ea");
        }
        else{
            $("#item4").css("color","#50658e");
        }

        if(scroll_pos >= top6 && scroll_pos < top7) {
            $("#item5").css("color","#2a81ea");
        }
        else{
            $("#item5").css("color","#50658e");
        }

        if(scroll_pos >= top8 && scroll_pos < top9) {
            $("#item6").css("color","#2a81ea");
        }
        else{
            $("#item6").css("color","#50658e");
        }
        
        if(scroll_pos >= top9 && scroll_pos < top10) {
            $("#item7").css("color","#2a81ea");
        }
        else{
            $("#item7").css("color","#50658e");
        }

        
    });

});
