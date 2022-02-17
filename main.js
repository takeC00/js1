'use strict';
$(".start").click(function(){
    alert("ストップウォッチスタート。ボタンクリック効いてること確認")
})
/*function startTimer() {
    alert("ストップウォッチスタート。ボタンクリック効いてること確認")
}*/

$(".start").click(function() {
    $(".timer").text(/*ここにstopWatch入れても反応しない*/"ここにconsole表示させたい")});
        /*
        ここにconsoleに表示される関数入れればいいのでは？と思ったが
        試しにstopWatchという関数を下で作ってやってみたがうまくいかない
        );
        */
const stopWatch = ()=>{
    console.log("ここに表示されるものをストップウォッチの液晶に反映させたい")
}
stopWatch();


/*
[hello]が、consoleに表示されてるものに変更できれば
下記のコードで
*/

    var timer1 = null;
        var cnt = 0;

        function event() {

            cnt++;

            // 1000ミリ秒ごとにコンソールに表示
            console.log('this time number is: ' + cnt);
        }

    // タイマー開始
    timer1 = setInterval(event, 1000);
/*
これでタイマーの表示をsetIntervalによって
計測された時間を反映できるのでは？

*/