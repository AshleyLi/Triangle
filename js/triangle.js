var deviceLine = 576;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //判斷捲軸高度以顯示 回到最上方 按鈕
    if (scroll >= 80) {
        $(".back2top").css("opacity", "1");
    } else {
        $(".back2top").css("opacity", "0");
    }
    // header 增加背景顏色提升可閱讀性
    if(scroll >= 10) {
        $("#trilogo").css("background-color", "rgba(220,220,221,0.9)");
    } else {
        $("#trilogo").css("background-color", "transparent");
    }


});

$(document).ready(function () {
    console.log('Jquery偵測載入');
    repositionMenu();

});

function repositionMenu() {
    if ($(window).width() >= 576)  {
        // 若為非手機裝置
        // 取得container左側邊線
        var totalW = $(window).width() / 2 + $(".container-fluid").width() / 2 - $(".TriMenu").width();
        // 定位菜單位置
        $(".TriMenu").css({ "left": totalW, "position": "fixed" });
        $(".back2top").css({ "left": totalW, "position": "fixed" });
        console.log('已重新菜單定位');

    } else {
        // 若為手機裝置
        $(".TriMenu").css({ "left": $(window).width() - $(".TriMenu").width(), "position": "fixed" });
        console.log("小裝置，不更動菜單樣式");
    }
    
}
$(window).on('load', function () {
    console.log("Window Loaded");
    repositionMenu();
});

$(window).resize(function () {
    repositionMenu();
    console.log("resize");
});





