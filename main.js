
$(document).ready(function(){

   $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.navigation').addClass('sticky');
        }
        else{
            $('.navigation').removeClass('sticky');
        }
   });

});
console.log('hhhhh');