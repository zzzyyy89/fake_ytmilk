$(function () {
    $.get('http://localhost:3030/pageData',{sub:'product'},function (data) {
        if(data.length>0){
            var box_t=$('#box3');
            var da=data[0];
            box_t.append($('<h3></h3>').text(da.t1))
                .append($('<span></span>').text(da.t1_py))
                .append($('<p></p>').text(da.t2));
            var list=$('<ul></ul>').appendTo($('#box4'));
            var bz=da.ps;
            var mo=$('<li></li>').addClass('cont')
                .append($('<a></a>').attr('href','').append($('<img>')));
            var cl=$('<li></li>').addClass('clearItem');
            for(var i=0;i<bz.length;i++){
                mo.clone().find('img').attr('src',bz[i].img).end().appendTo(list);
                if((i+1)%5==0||i==bz.length-1){
                    cl.clone().appendTo(list);
                }
            }
        }
    });
});