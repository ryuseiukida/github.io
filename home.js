document.addEventListener("DOMContentLoaded", function () {
    //テキストのカウントアップの設定
    var bar = new ProgressBar.Line(splash_text, {//id名を指定
        strokeWidth: 0,//進捗ゲージの太さ
        duration: 250,//時間指定(1000＝1秒)
        trailWidth: 0,//線の太さ
        text: {//テキストの形状を直接指定 
            style: {//天地中央に配置
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                'font-size': '1.2rem',
                color: '#fff',
            },
            autoStyleContainer: false //自動付与のスタイルを切る
        },
        step: function (state, bar) {
            bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
        }
    });

    //アニメーションスタート
    bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
        $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
    });

});



$(function () {
    //写真
    $('.slider1,.slider2').slick({
        autoplay: true, //自動的に動き出すか
        infinite: true,//スライドのループ
        speed: 500,//スライドのスピード
        slidesToShow: 3, //スライドの画面を3枚に
        slidesToScroll: 1,//1回のスクロールで一枚の写真を移動して見せる
        prevArrow: '<div class = "slick-prev"></div>', //矢印部分PreviewのHTMLを変更
        nextArrow: '<div class = "slick-next"></div>',//矢印部分NextのHTMLを変更
        centerMode: true,//要素を中央ぞろえに
        variableWidth: true,//幅の違う画像の高さをそろえて表示
        dots: true,//下部ドットナビゲーションを表示
    });


    //ページアップ
    $('#page-top').click(function () {
        $('body,html').animate({
            scrollTop: 0 //ページトップまでスクロール
        }, 500); //ページトップスクロールの速さ
        return false; //リンク自体の無効か
    })


});

/*画像変化*/
var image_src = new Array("image/flog.png","image/flog2.png");
var num = 0;

function slideshow(){
    if (num == 1) {
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("flog").src=image_src[num];
}









/*
//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeIn0ut',//アニメーション効果lineareaseeaseutease
    duration:1000,//時間指定(1000=1秒)
    strokewidth:0.2,//進捗ゲージの太さ
    color:'#555',//進捗ゲージのカラー
    trailwidth:0.2,//ゲージベースの線の太さ
    trailcolor:'#bbb',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定
        style:{//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0', //バーより上に配置
            transform: 'translate(-50%,-50%) ',
            ' font-size': 'lrem',
            color: '#fff',
        },
        autoStyleContainer: false//自動付与のスタイルを切る
    },
    step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100)+'%');//テキストの数値
    }
});
    //アニメーションスタート
    bar.animate(1.0, function(){//バーを描画する割合を指定します1.なら100%まで描画
    $("#splash_text").fade0ut(10);//フェイドアウトでローディングテキス
    $(".loader_cover-up").addClass("coveranime");//カバーが上に上がるク
    $(".loader_cover-down").addClass("coveranime");//カバーが下に下がる
    $("#splash").fadeOut();//#splashエリアをフェード
});


*/