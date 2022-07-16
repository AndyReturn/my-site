

	 $(function () {
        $(".productmain14M ul li").eq(0).addClass("cur").css({ width: 350 });
        $(".productmain14M ul li").eq(0).find(".textbox").css({ "height": 158, "padding-top": 19, "padding-bottom": 40 });
        var oldli = 0;
        var t;
        $(".productmain14M ul li").hover(function () {
            var _this = $(this);
            var _thisI = $(this).index();
            clearTimeout(t);
            t = setTimeout(function () {
                if (_thisI == oldli) { return false } else {
                    $(".productmain14M ul li").eq(oldli).removeClass("cur").stop(true).animate({ width: 169 }, 300);
                    $(".productmain14M ul li").eq(oldli).find(".textbox").stop(true).animate({ "height": 56, "padding-top": 0, "padding-bottom": 0 }, 300);
                    _this.addClass("cur").stop(true).animate({ width: 350 }, 300);
                    _this.find(".textbox").stop(true).animate({ "height": 158, "padding-top": 19, "padding-bottom": 40 }, 300)
                    oldli = _this.index();
                };
            }, 200);
        }, function () {
            clearTimeout(t);
        })
    })


  $(function () {
    var imgp = ".index_cp ul li";
    var imgz = ".img";
    var atime = 700;
    var num = 1.1;
    var nw;
    var nh;
    $(imgp).hover(function () {
        var ni = $(this).find(imgz);
        if (ni.is(":animated")) {
            ni.stop().animate({ width: nw * num, height: nh * num, "left": -nw * (num - 1) / 2, "top": -nh * (num - 1) / 2 }, atime);
        } else {
            nw = ni.width();
            nh = ni.height();
            ni.stop().animate({ width: nw * num, height: nh * num, "left": -nw * (num - 1) / 2, "top": -nh * (num - 1) / 2 }, atime);
        }
		$(this).find(".index_div01").slideToggle(300);

    }, function () {
        var ni = $(this).find(imgz);
        ni.stop().animate({ width: "100%", height: "100%", "left": 0, "top": 0 }, atime);
		$(this).find(".index_div01").slideDown(300);
    })
})
