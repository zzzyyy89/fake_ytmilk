$(function () {
    //手机版菜单显示和消失
    $('#m-dl-btn').click(function () {
        // $(this).hasClass('active')
        var btn=$(this),ls=$('.m-dl-menu');
        if (btn.hasClass('active')){
            btn.removeClass('active');
            ls.animate({opacity:0,top:"55px"},300,function () {
               ls.hide();
            });
        }else{
            btn.addClass('active');
            ls.show().animate({opacity:1,top:"50px"},300);
        }
    });

    //上栏菜单开关
    $('.toggle').click(function () {
        var tog=$(this);
        var cat=$('#box2');
        if(tog.hasClass('close')){
            // tog.find('p').show();
            tog.removeClass('close').parent('.container').removeClass('close');
            cat.removeClass('expanded').find('span.item').addClass('hidden');

        }else {
            // tog.find('p').hide();
            tog.addClass('close').parent('.container').addClass('close');
            cat.addClass('expanded').find('span.item').removeClass('hidden');
        }
    });
});
