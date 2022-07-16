
$(function(){
	
	
	//input绑定
    function clearInput(obj){
        _input = obj.find('input[type=text]');
        var input_val = _input.val();
        $(_input).focus(function(){
            var fo_val = $(this).val();
            if( fo_val == input_val){
                $(this).val('');
            }
        });
        $(_input).blur(function(){
            var bl_val = $(this).val();
            if( bl_val == ''){
                $(this).val(input_val);
            }
        });

    }
    clearInput($('.hsh-search'));
    clearInput($('.search-item'));
    
    // 头部分享
     var jiathis_config={
        summary:"",
        shortUrl:false,
        hideMore:false
    }
    
    // 导航
	var _th=$('.hshNav li .cur1').parent().parent().index();
	//console.log(_th)
    $('.hshNav').find('li').mouseenter(function(){
        $(this).find('.subnav').stop(false,true).fadeIn(300);
		$('.hshNav li').find('h3 a').removeClass('cur1')
		$(this).find('h3 a').addClass('cur1')
    }).mouseleave(function(){
        $(this).find('.subnav').stop(false,true).hide(0);
		$('.hshNav li').find('h3 a').removeClass('cur1')
		$('.hshNav li').eq(_th).find('h3 a').addClass('cur1')
    });	
    
    //    首页最新资讯
    if($('.infor-list').find('li').length > 6){
        var ilTimer;
        var ilAB = $('.infor-list').find('ul')
        
        function infor(){
            var ilUT = ilAB.position().top;
            ilAB.animate({'top': ilUT - 30},500,function(){
                ilAB.css('top',0);
                $(this).find('li:eq(0),li:eq(1)').appendTo($(this));
            });
        }
        
        ilTimer = setInterval(infor,3000);
        
        $('.index-infor').find('.infor-prev').click(function(){
            if(ilAB.is(":animated")) {return};
            ilAB.find('li:last-child').prependTo(ilAB);
            ilAB.find('li:last-child').prependTo(ilAB);
            ilAB.css('top',-30);
            var ilUB = ilAB.position().top;
            ilAB.animate({'top': ilUB + 30},500,function(){
               ilAB.css('top',0);
            });
        });
        
        $('.index-infor').find('.infor-next').click(function(){
            if(ilAB.is(":animated")) {return};
            infor();
        });
        
        $('.index-infor').hover(function(){
            clearInterval(ilTimer);
            ilTimer = "";
        },function(){
            ilTimer = setInterval(infor,3000);
        });
    }else{
        $('.index-infor').find('.btn-box').hide();
    }
    
    
    // 右侧按钮
    var wH = $(window).height() / 6;
    $(window).scroll(function() {
        var dT = $(document).scrollTop();
        if( dT > wH){
            $('.leftbtn').fadeIn(300);
        }else{
            $('.leftbtn').fadeOut(300);
        }
    });
    
    $('.leftbtn').find('.ico').mouseenter(function(){
        $(this).find('.cont').stop(false,true).fadeIn(300);
    }).mouseleave(function(){
        $(this).find('.cont').stop(false,true).fadeOut(300);
    });
    $('.leftbtn .backtop').click(function(){
        $('html,body').animate({scrollTop:0}, 800);
    });
    
    // 产品详情 详情切换
    $('.prodetail-cont').eq(0).show(0);
    $('.prodetail-tab').find('a').click(function(){
        if(!$(this).hasClass('cur')){
            $(this).addClass('cur').siblings().removeClass('cur');
            $('.prodetail-cont').hide(0).eq($(this).index()).fadeIn(300);
        }
    });
    
    // 安装与维护
    $('.build-step').find('li:even').css('float','left')
    $('.build-step').find('li:odd').css('float','right')
    $('.build-step').find('li:even').each(function(){
        var bsLH = $(this).height();
        var bsRH = $(this).next().height();
        if(bsLH > bsRH){
            $(this).next().css('height',bsLH)
        }else{
            $(this).css('height',bsRH)
        }
    });

    // 分页
    if($('.Paging').find('a').length > 0){
        $('.Paging').show(0);
    }else{
        $('.Paging').hide(0);
    }
   
   //新闻划过
   var ptop=$("#pagelist dl .eximg").position().top;
   $("#pagelist .clearfix").hover(function(){
	   $(this).addClass('cur');
	   $(this).find('.eximg').stop().animate({top:0},500);
	   },function(){
		   $(this).removeClass('cur');
		   $(this).find('.eximg').stop().animate({top:ptop},500);
	   });
	 

	
});

//产品品牌
$(function(){
   	
 
  $(".menu_h3").click(function(){
	   var t=$(".menu_h3").index($(this));
	   if($(this).next().is(":hidden")){
		   $(".menu_ul").slideUp(300);
		   $(".menu_h3").removeClass('cur').eq(t).addClass('cur');
		   $(this).next().slideDown(300);
		   $(".menu_div").slideUp(300);
		   $(".menu_p").removeClass('cur');
		   }else{
			   $(".menu_h3").removeClass('cur');
			   $(this).next().slideUp(300);
			    $(".menu_div").slideUp(300);
				$(".menu_p").removeClass('cur');
			}
	})
	
	$(".menu_p").click(function(){
	   var t=$(".menu_p").index($(this));
	   if($(this).next().is(":hidden")){
		   $(".menu_div").slideUp(300);
		   $(".menu_p").removeClass('cur').eq(t).addClass('cur');
		   $(this).next().slideDown(300);
		   }else{
			   $(".menu_p").removeClass('cur');
			   $(this).next().slideUp(300);
			}
	})
	
	
	
});
//产品品牌end


