$(document).ready(function () {
    $time=setInterval(fun2, 500);
    $i=1;
    $i=i++;
    $t=document.getElementById("bbt1").value;
    function fun2() {
            document.getElementById("img1").src = "images/" + "p" + $i + ".png";
            $i=++$i;
            if ($i >= 11) {
            $i = 1;
        }
    }

    });
function dfun2(){
            clearInterval($time);

}
function dfun3(){
    $s=$("#drop1 img").attr("src");
    alert($s);
    
}


// $(document).ready(function () {
//     $s=$("#drop1 img").attr("src");
//     // $v=$("#drop1").attr("");
//     if($s.attr()!=""){
//         $time=setInterval(fun2, 500);
//         $i=1;
//         $i=i++;
//         $t=document.getElementById("bbt1").value;
//         function fun2() {
//                 document.getElementById("img1").src = "images/" + "p" + $i + ".png";
//                 $i=++$i;
//                 if ($i >= 11) {
//                 $i = 1;
//             }
//         }
        
// }
// else{
//     clearInterval($time);
// }

//     });
// function dfun2(){
//             clearInterval($time);

// }
// function dfun3(){
//     $s=$("#drop1 img").attr("src");
//     alert($s);
    
// }


