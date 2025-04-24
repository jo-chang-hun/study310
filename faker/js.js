$(document).ready(function(){

    let ht = $('body').height()
    $('html,body').stop().animate({'scrollTop':ht},1500)

    
    $(window).scroll(function(){
        // 스크롤 할때마다 스크롤의 위치를 찾아라
        let sc = $(this).scrollTop();

        console.log(sc)
        $('section').css({'left':-sc})
    })

//  article 의h2 를 클릭했을때, 


$('article h2').click(function(){

    let img = $(this).find('a').attr('href');
 
    console.log(img);
    $('article').removeClass('on')
    $(this).parent('article').addClass('on');
 
    $('article p img').attr({'src':""})
 
    $(this).siblings('p').children('img').attr({'src':img})
 });
 
 // article span을 클릭했을때 article removeClass 가 되어라 
 
 $('article span').click(function(){
 
    $('article').removeClass('on');
    $('article p img').attr({'src':""})
 });
 
 
 // nav의li를 클릭했을때, srcroll 이 일정거리만큼 움직이게 한다.
 
 
 $('nav li').click(function(){
 
    let ab= $(this).index();
 
 
    $('html,body').stop().animate({'scrollTop':1000*ab},800)
 })
 



 $(document).ready(function(){

    //section 의 높이를 화면의 높이 와 같이해라

    // 화면의 높이값 찾기

    let ht = $(window).height();
    $('section').height(ht);

    // 화면의 크기가 변경될때마다 화면의 크기를 찾아서 
    // section의 높이를 설정해라

    $(window).resize(function(){

        
    let ht = $(window).height();
    $('section').height(ht);


    })  

    // 윈도우에서 스크롤했을때 스크롤top 값을 찾아라.

    $(window).scroll(function(){

        let sc = $(this).scrollTop()
        let ht = $(window).height();
        console.log(sc);



    });

    

    // section에서 마우스 휠을 했을때, 다음화면으로 또는 이전화면으로 이동해라


    $('section').mousewheel(function(event,delta){

        // 마우스를 올렸을때

        if(delta > 0) {

            let prev = $(this).prev().offset().top;
          

            $('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce')
           


        }


        // 마우스를 내렸을때 

        else if (delta < 0){
            let next = $(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':next},1400,'easeOutBounce')

        }


    });

    // 마우스가 움직일때마다 이미지들의 위치값이 바뀌어라
    $('section').mousemove(function(e){

        // 마우스 위치값을 찾아라
        let x = e.pageX;
        let y = e.pageY;

        

        $(this).find('.p11').css({'bottom':110+(y/10),'right':110+(x/10)})
        $(this).find('.p12').css({'bottom':-40-(y/10),'right':130-(x/10)})
        $(this).find('.p13').css({'top':180+(y/10),'right':60+(x/10)})

        $(this).find('.p21').css({'bottom':-480+(y/10),'right':-180+(x/10)})
        $(this).find('.p22').css({'bottom':-40-(y/10),'right':130-(x/10)})

        $(this).find('.p31').css({'bottom':30+(y/10),'right':180+(x/10)})
        $(this).find('.p32').css({'bottom':-270-(y/10),'right':110-(x/10)})
        $(this).find('.p33').css({'bottom':-130+(y/10),'right':-70+(x/10)})

        $(this).find('.p41').css({'bottom':-120+(y/10),'right':20+(x/10)})
        $(this).find('.p42').css({'bottom':-180-(y/10),'right':0-(x/10)})






    })
        



})



})