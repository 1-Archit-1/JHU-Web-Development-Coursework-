$(function () {


    $("*").click(function (event) {
        $(".navbar-toggle").blur();
        console.log("focused on "+this);
    });
    $(".navbar-toggle").blur(function (event) {

        console.log("blurred out");
        var screenWidth = window.innerWidth;
        if(screenWidth<768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {

    var reshandler1= function (res){
        var html=res;
        document.querySelector("#main-content").innerHTML=res; 


        document.querySelector("#menu-categories").addEventListener("click",
        function (event){

            var reshandler2= function (res){
                var html=res;
                console.log(html);
                document.querySelector("#main-content").innerHTML=res; 
            };
            
            $ajaxUtils.sendGetRequest("menu-categories.html",reshandler2,false);
        }
    );
            document.querySelector("#menu-tile").addEventListener("click",
            function (event){

            var reshandler2= function (res){
                var html=res;
                document.querySelector("#main-content").innerHTML=res; 
            };
            $ajaxUtils.sendGetRequest("menu-categories.html",reshandler2,false);
            }
        );

    };
    $ajaxUtils.sendGetRequest("home-snippet.html",reshandler1,false);

    
  
});






