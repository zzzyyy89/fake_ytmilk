var gulp = require("gulp");

var less = require("gulp-less");//less

var concat = require("gulp-concat");//文件合并

var uglify = require("gulp-uglify");//js压缩

var minifyCss = require("gulp-minify-css");//css压缩

var sourcemap=require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();//浏览器同步
var reload = browserSync.reload;

var del = require('del');
var mon=require('gulp-nodemon');

gulp.task('clean', function(cb) {
    del(['public/javascripts', 'public/stylesheets'], cb)
});

gulp.task('express',function () {
    mon({
        script:'./bin/www',
        ext:'js html',
        env:{
            'NODE_ENV':'development'
        }
    });
});

// gulp.task("minJS",function(){
//     gulp.src("source/script/*.js")
//         .pipe(concat("index.js"))
//         .pipe(uglify())
//         .pipe(gulp.dest('public/javascripts'));
// });

gulp.task('minJs1',function () {
    gulp.src(['source/script/com/jquery*.min.js','source/script/com/home.js','source/script/com/swiper*.jquery.min.js','source/script/com/swiper.animate*.min.js','source/script/home.js'])
        .pipe(concat('home.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});
gulp.task('minJs2',function () {
    gulp.src(['source/script/com/jquery*.min.js','source/script/com/home.js','source/script/about.js'])
        .pipe(concat('about.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});
gulp.task('minJs3',function () {
    gulp.src(['source/script/com/jquery*.min.js','source/script/com/home.js','source/script/contact.js'])
        .pipe(concat('contact.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});
gulp.task('minJs4',function () {
    gulp.src(['source/script/com/jquery*.min.js','source/script/com/home.js','source/script/dev.js'])
        .pipe(concat('dev.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});
gulp.task('minJs5',function () {
    gulp.src(['source/script/com/jquery*.min.js','source/script/com/home.js','source/script/news.js'])
        .pipe(concat('news.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});
gulp.task('minJs6',function () {
    gulp.src(['source/script/com/jquery*.min.js','source/script/com/home.js','source/script/product.js'])
        .pipe(concat('product.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});
gulp.task('minJs7',function () {
    gulp.src(['source/script/com/jquery*.min.js','source/script/com/home.js','source/script/shop.js'])
        .pipe(concat('shop.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'));
});

// gulp.task('js-watch',['minJS'],browserSync.reload);

gulp.task("minCSS",function(){
    gulp.src("source/less/*.less")
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(minifyCss())
        .pipe(sourcemap.write())
        .pipe(gulp.dest('public/stylesheets'));
        // .pipe(reload({stream:true}));
});

gulp.task("start",function(){
    // browserSync.init({
    //     server:{
    //         baseDir:'dist'
    //     }
    // });

    gulp.watch('source/less/*.less',["minCSS"]);
    gulp.watch('source/script/*.js',['minJs7','minJs6','minJs5','minJs4','minJs3','minJs2','minJs1']);

    var files=[
        'views/*.ejs',
        'public/**/*.*'
    ];
    browserSync.init(files,{
        proxy:'http://localhost:3030',
        browser:'chrome',
        notify:false,
        port:3031
    });
    gulp.watch(files).on('change',reload);
    // gulp.watch('src/html/*.html',['testHtmlmin']).on('change',reload);
});

gulp.task("default",['start']);