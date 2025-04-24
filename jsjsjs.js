$(document).ready(function() {
    // 초기 로딩 시 페이지 맨 아래로 스크롤
    let pageHeight = $('body').height();
    $('html, body').stop().animate({ scrollTop: pageHeight }, 1500);
  
    // 이미지 갤러리: 이미지 클릭 시 확대
    $('article h2').click(function() {
      let img = $(this).find('a').attr('href');
      $('article').removeClass('on');
      $(this).parent('article').addClass('on');
      $('article p img').attr({ 'src': "" });
      $(this).siblings('p').children('img').attr({ 'src': img });
    });
  
    // close 버튼 클릭 시 이미지 닫기
    $('article span').click(function() {
      $('article').removeClass('on');
      $('article p img').attr({ 'src': "" });
    });
  
    // nav 메뉴 클릭 시 수직 스크롤 이동
    $('nav li').click(function() {
      let index = $(this).index();
      $('html, body').stop().animate({ scrollTop: 1000 * index }, 800);
    });
  
    // 비디오 마우스 진입 시 애니메이션 및 재생
    $('article').mouseenter(function() {
      let vid = $(this).find('video').get(0);
      if (vid) vid.play();
  
      $(this).stop().animate({ 'width': '35%' }, 1000, function() {
        $(this).find('h3').stop().animate({ 'right': '10px' }, 400);
        $(this).find('p').stop().animate({ 'right': '10px' }, 800);
      });
  
      $(this).find('video').stop().animate({ 'opacity': 0.9 }, 1200);
    });
  
    // 비디오 마우스 떠날 때 초기화
    $('article').mouseleave(function() {
      let vid = $(this).find('video').get(0);
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
  
      $(this).stop().animate({ 'width': '12%' }, 700);
      $(this).find('video').stop().animate({ 'opacity': 0 }, 2000);
      $(this).find('h3').stop().animate({ 'right': '-310px' }, 200);
      $(this).find('p').stop().animate({ 'right': '-310px' }, 500);
    });
  
    // 화면 크기에 따라 섹션 높이 조절
    function setSectionHeight() {
      let ht = $(window).height();
      $('section').height(ht);
    }
    setSectionHeight();
    $(window).resize(setSectionHeight);
  
    // 스크롤 위치에 따라 GNB 활성화
    $(window).scroll(function() {
      let sc = $(this).scrollTop();
      let ht = $(window).height();
  
      $('section').css({ 'left': -sc });
  
      $('.gnb li').each(function(index) {
        if (sc >= (ht * index) - 200 && sc < (ht * (index + 1)) - 200) {
          $('.gnb li').removeClass('on');
          $(this).addClass('on');
        }
      });
    });
  
    // GNB 클릭 시 섹션 이동
    $('.gnb li').click(function() {
      let i = $(this).index();
      let ht = $(window).height();
      $('.gnb li').removeClass('on');
      $(this).addClass('on');
      $('html, body').stop().animate({ 'scrollTop': ht * i }, 1400);
    });

    $(document).ready(function(){
        $('.gnb li').click(function(){
          var tab = $(this).data('tab');
          $('.gnb li').removeClass('on');
          $(this).addClass('on');
          $('.tab-section').removeClass('on');
          $('#' + tab).addClass('on');
        });
      });
  
    // 마우스 휠로 섹션 전환
    $('section').on('mousewheel DOMMouseScroll', function(e) {
      let delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
      let moveTo = delta > 0 ? $(this).prev() : $(this).next();
      if (moveTo.length) {
        $('html, body').stop().animate({ 'scrollTop': moveTo.offset().top }, 1400, 'easeOutBounce');
      }
      return false;
    });
  
    // 마우스 무브에 따라 이미지 위치 이동 (옵션 요소 존재 시)
    $('section').mousemove(function(e) {
      let x = e.pageX, y = e.pageY;
      const move = (sel, btm, rt) => $(this).find(sel).css({ 'bottom': btm + (y / 10), 'right': rt + (x / 10) });
  
      move('.p11', 110, 110); move('.p12', -40, 130); move('.p13', 180, 60);
      move('.p21', -480, -180); move('.p22', -40, 130);
      move('.p31', 30, 180); move('.p32', -270, 110); move('.p33', -130, -70);
      move('.p41', -120, 20); move('.p42', -180, 0);
    });
  
    // 탭 전환 (Image / Video)
    $('.gnb li').click(function() {
      const tab = $(this).data('tab');
      $('.gnb li').removeClass('on');
      $(this).addClass('on');
      $('.tab-section').removeClass('on');
      $('#' + tab).addClass('on');
    });
  });