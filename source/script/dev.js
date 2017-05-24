$(function () {
    $.get('http://localhost:3030/pageData',{sub:'developing'},function (data) {
        if(data.length>0){
            var box_t=$('#box_t');
            var da=data[0];
            box_t.append($('<h3></h3>').text(da.t1))
                .append($('<span></span>').text(da.t1_py))
                .append($('<p></p>').html(da.t2));
            var list=$('<ul></ul>').appendTo($('#boz'));
            var bz=da.boz;
            var mo=$('<li></li>').addClass('pz')
                .append($('<h3></h3>').append($('<a></a>').attr('href','')))
                .append($('<div></div>').addClass('pzimg').append('<img>'));
            for(var i=0;i<bz.length;i++){
                mo.clone().find('h3 a').text(bz[i].tip).end().find('img').attr('src',bz[i].img).end().appendTo(list);
            }
        }
    });

});