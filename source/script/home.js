$(function () {
    $('#foot-qr').addClass('ani').attr('swiper-animate-effect','fadeInUp').attr('swiper-animate-duration','0.5s').attr('swiper-animate-delay','0.45s');
    /*设置swiper*/
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        // 分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
        //开启滚轮控制
        mousewheelControl : true,
        //开启键盘控制
        keyboardControl : true,
        //禁止拖动
        onlyExternal : true,
        // //页面切换时瓶子的动画效果
        onInit:function (swiper) {
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if(swiper.realIndex==0){
                $('#box2').hide();
                $('.menu #box1').show().css({opacity:1,right:"0"});
                // $('.menu #box1').show().animate({opacity:1,right:"0"},300);
            }
        },
        onSlideChangeStart:function (swiper) {
            if(swiper.previousIndex==0){
                $('#box2').show();
                $('.menu #box1').animate({opacity:0,right:"-500px"},300,function () {
                    $(this).hide();
                });
            }
        }
    });

});