$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $(".back2top").css("opacity", "1");
    } else {
        $(".back2top").css("opacity", "0");
    }
});

$(document).ready(function () {
    console.log('Jquery偵測載入');
    repositionMenu();

});

function repositionMenu() {
    if ($(window).width() >= 576)  {
        var totalW = $(window).width() / 2 + $(".container-fluid").width() / 2 - $(".TriMenu").width();
        $(".TriMenu").css({ "left": totalW, "position": "fixed" });
        $(".back2top").css({ "left": totalW, "position": "fixed" });
        console.log('已重新菜單定位');
    } else {
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



