var express = require('express');
var router = express.Router();
var mClient=require('mongodb').MongoClient;
var dbSource='mongodb://localhost:27017/yt_milk';

var temp={title:'燕塘乳业',sub:[]};
var table_subs;

mClient.connect(dbSource,function (err,db) {
    if(err){
        console.log('connect error:'+err);
    }else {
        table_subs=db.collection('subs');
    }
});
//测试数据库
router.get('/testDb',function (req,res) {
    if(table_subs){
        table_subs.find().toArray(function (err, result) {
            if(err){
                res.send('query err:'+err.toString());
                console.log('Error:'+ err);
            }else {
                res.send(result);
            }
        });
    }else {
        res.send("testDb fail!");
    }
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',comcat({}));
});

//查询页面数据
router.get('/pageData',function (req,res,next) {
    if(req.query.sub){
        if(table_subs){
            // console.log(table_subs);
            table_subs.find({'tag':req.query.sub}).toArray(function (err, result){
                if(err){
                    var err = new Error(err.toString());
                    err.status = 500;
                    next(err);
                }else {
                    res.send(result);
                }
            });
        }else {
            var err = new Error('connect db table fail');
            err.status = 500;
            next(err);
        }
    }else {
        var err = new Error('\'sub\' is not found!');
        err.status = 500;
        next(err);
    }
});

router.get('/about',function (req,res) {
   res.render('about',comcat({sub:[{title:'集团介绍',url:''},{title:'核心价值',url:''},{title:'企业荣誉',url:''}]}));
});

router.get('/products',function (req,res) {
    res.render('products',comcat({}));
});

router.get('/shop',function (req,res) {
    res.render('shop',comcat({}));
});

router.get('/news',function (req,res) {
    res.render('news',comcat({sub:[{title:'燕塘新闻',url:''},{title:'营养知识',url:''},{title:'社会公益',url:''}]}));
});

router.get('/developing',function (req,res) {
    res.render('dev',comcat({sub:[{title:'投资公告',url:''},{title:'发展公告',url:''},{title:'招标报告',url:''}]}));
});

router.get('/contact',function (req,res) {
    res.render('contact',comcat({sub:[{title:'人才招聘',url:''},{title:'客服服务',url:''},{title:'加盟燕塘',url:''}]}))
})

function comcat(data) {
    var o={};
    for(var p in temp){
        o[p]=temp[p];
    }
    for(var p in data){
        o[p]=data[p];
    }
    // console.log(o);
    return o;
}

module.exports = router;
