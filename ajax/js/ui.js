$(function(){
    $(window).on('scroll', function(){ // this개념조심하기
         let scrpos = $(this).scrollTop();
         if( scrpos > 80 ){ // 스크롤이 아래로
            $("#hd").addClass('scroll')
         }else{
            $("#hd").removeClass('scroll')
         }   

    })
})