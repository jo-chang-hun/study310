$(document).ready(function(){

    // 아티클에 마우스가 들어갔을때, 내가 가로값이 커져라
    $('article').mouseenter(function(){

        // video를 재생을 시켜라
        let vid = $(this).find('video').get(0);
        vid.play()







        $(this).stop().animate({'width':'35%'},1000,function(){

            // 내속의 h3를 찾아 right값이 바뀌게 해라
            $(this).find('h3').stop().animate({'right':'10px'},400)
            // 내속의 P를 찾아 right값이 바뀌게 해라
            $(this).find('p').stop().animate({'right':'10px'},800)
        });

        // 내속의 video를 찾아 opasity가 보이게하라
        $(this).find('video').stop().animate({'opacity':0.9},1200)
    });



    // 아티클에 마우스가 나갔을때, 내가 가로값이 작아져라
    $('article').mouseleave(function(){

        // video를 재생을 시켜라
        let vid = $(this).find('video').get(0);
        vid.currentTime = 0

        vid.pause()


        $(this).stop().animate({'width':'12%'},700);

        // 내속의 video를 찾아 opasity가 안보이게하라
        $(this).find('video').stop().animate({'opacity':0},2000)

        // 내속의 h3를 찾아 right값이 바뀌게 해라
        $(this).find('h3').stop().animate({'right':'-310px'},200)

        // 내속의 P를 찾아 right값이 바뀌게 해라
        $(this).find('p').stop().animate({'right':'-310px'},500)
    });

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
    
            
    
            // 위의 공식을 반복문으로 변환하기
    
    
            for(let a = 0; a <4; a++){
    
                if(sc>=(ht*a)-200 && sc<(ht*(a+1))-200){
                    $('.gnb li').removeClass('on')
                    $('.gnb li').eq(a).addClass('on');
        
                }
    
            }
    
    
    
    
        });
    
        // gnb li 를 클릭했을때, scrollTop의 위치를 바꿔라 
    
        $('.gnb li').click(function(){
    
            // html body 안의 scrollTop을 애니매이션을 이용해 움직이게해라 
    
            /*
            애니메이션만드는방법 
    
            $('선택자').stop().animate({'속성명':'속성값'},작동시간-1000/1초,easing-생략가능)
    
    
            */
    
            let i = $(this).index();
            let ht = $(window).height();
    
            $('.gnb li').removeClass('on')
            $(this).addClass('on');
    
            $('html,body').stop().animate({'scrollTop':ht*i},1400)
    
    
    
    
        })
    
    
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