$(document).ready(function () {

    $("#nav-bar ol").hide();
    $("#cli_m0").mouseenter(function () { 
        $("#m0").show();
    });
    $("#cli_m1").mouseenter(function () { 
        $("#m1").show();
    });
    $("#cli_m0").mouseleave(function () { 
        $("#m0").hide();
    });
    $("#cli_m1").mouseleave(function () { 
        $("#m1").hide();
    });
});
// $("#nav-bar ol").mouseenter(function () {
        
//     $k=$(this).attr("id");
//     $k1=$(this).position().left;
//     $k2=$(this).position().top;
//     $("#cli_" + k).css("top", k2).css("left", k1 + 100).show().mouseleave(function () {
//         $("#cli_" + k).hide();
//         });
//         $("#cli_" + k).mouseover(function () {
//         $("#cli_" + k).show();
//         });

//     }).mouseleave(function () {
//         var k = $(this).attr("id");
//         $("#cli_" + k).hide();
//     });
//         $("#cli_s1 ul li,a").mouseover(function () {
//             $(this).css("color", "#00ff00");
//         });
//         $("#cli_s1 ul li,a").mouseleave(function(){
//             $(this).css("color", "#FFFF00");
//         });


