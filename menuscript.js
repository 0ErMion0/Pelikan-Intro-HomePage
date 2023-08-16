
// jQuery로 헤더 sticky 때 내부 링크 이동 시키면 위치 안 맞는 문제 해결 때 이용
window.onload = $(function () { // head에 파일 위치하는데 먼저 이거 읽으면 딱히 적용할게 없어서 실행될 때 적용되라고 window.onload = 적음
    $(".innnerAnchor").on("click", function(){
        // 헤더 높이 구하기
        var headerHeight = $("header").outerHeight();
        // 버튼의 링크 구하기
        var href = $(this).attr("href");
        // 링크대상 DOM 구하기
        var target = $(href == "#" || href == "" ? "body" : href);
        // 링크대상 DOM의 height 위치 구하기
        var position = target.offset().top - headerHeight;
        // 애니메이션 효과 넣어 DOM으로 이동
        $("html, body").animate({ scrollTop: position }, 600, "swing");
    });
});